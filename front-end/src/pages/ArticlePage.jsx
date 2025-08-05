import { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import articles from "../articleContent";
import axios from "axios";
import CommentsList from "./CommentsList";
import AddComentForm from "../AddComentForm";
import useUser from "../useUser";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ArticlePage = () => {
  const { user, isLoading } = useUser();
  const { name } = useParams();
  const { upvote: initialUpvote, comments: initialComment } = useLoaderData();
  const article = articles.find((a) => a.name === name);
  const [upvote, setUpvote] = useState(initialUpvote);
  const [comments, setComments] = useState(initialComment);
  async function handleUpvote() {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const response = await axios.post(
      `${API_BASE_URL}/api/articles/${name}/upvote`,
      null,
      { headers }
    );
    const updatedArticleData = response.data;
    setUpvote(updatedArticleData.upvote);
  }
  async function onAddComment({ nameText, commentText }) {
    //  console.log(nameText, commentText);
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `${API_BASE_URL}/api/articles/${name}/comments`,
      {
        postedBy: nameText,
        text: commentText,
      },
      { headers }
    );

    const updatedArticleData = response.data;
    //console.log(updatedArticleData);
    setComments(updatedArticleData.comments);
  }
  return (
    <>
      <h1>{article.title}</h1>
      {user && <button onClick={handleUpvote}>Upvote</button>}
      <p>This article has {upvote} upvotes</p>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {user && <AddComentForm onAddComment={onAddComment} />}
      <CommentsList comments={comments} />
    </>
  );
};

export default ArticlePage;

export const loader = async ({ params }) => {
  const response = await axios.get(`${API_BASE_URL}/api/articles/${params.name}`); //`http://localhost:8000/api/articles/${ params.name`);

  const { upvote, comments } = response.data;
  //  console.log(upvote, comments);
  return { upvote, comments };
};
