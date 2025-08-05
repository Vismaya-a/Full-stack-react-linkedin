import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3>Comments:</h3>

      {comments.map((c) => (
        <div key={c._id}>
          <h4>{c.postedBy || "Anonymous"}</h4>
          <p>{c.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
