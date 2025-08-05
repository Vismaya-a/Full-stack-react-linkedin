import React, { useState } from "react";
const AddComentForm = ({ onAddComment }) => {
  const [nameText, setNameText] = useState("");
  const [commentText, setCommentText] = useState("");
  return (
    <>
      <h3>Add Comment</h3>
      <label>Name</label>
      <input
        type="text"
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
      />
      <label>Comment</label>
      <input
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={() => onAddComment({ nameText, commentText })}>
        Add Comment
      </button>
    </>
  );
};

export default AddComentForm;
