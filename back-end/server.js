import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import admin from "firebase-admin";
import fs from "fs";

const credentials = JSON.parse(fs.readFileSync("./credentials.json"));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const port = process.env.PORT || 8000;
const app = express();

let db;
app.use(express.json());
app.use(cors());
async function connectToDB() {
  try {
    const uri = !process.env.MONGODB_USERNAME?"mongodb://127.0.0.1:27017":`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.fzr0sei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    db = client.db("full-stack-react-db");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
  }
}

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const article = await db.collection("articles").findOne({ name });
  res.json(article);
});

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;
  if (authtoken) {
    const user = await admin.auth().verifyIdToken(authtoken);
    req.user = user;
    next();
  } else {
    res.sendStatus(400);
  }
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection("articles").findOne({ name });
  const upvotedIds = article.upvotedIds || [];
  const canUpvote = uid && !upvotedIds.includes(uid);
  if (canUpvote) {
    const updatedArticle = await db.collection("articles").findOneAndUpdate(
      { name },
      {
        $inc: { upvote: 1 },
        $push: { upvotedIds: uid },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(updatedArticle);
  } else {
    res.sendStatus(403);
  }
});
app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text };
  const updatedArticle = await db.collection("articles").findOneAndUpdate(
    { name },
    {
      $push: { comments: newComment },
    },
    {
      returnDocument: "after",
    }
  );

  res.json(updatedArticle);
});
async function start() {
  await connectToDB();
  app.listen(port, () => {
    console.log(`cool server is listening on port ${port}`);
  });
}
start();
