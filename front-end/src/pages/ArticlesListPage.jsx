import { Link } from "react-router-dom";
import React from "react";
import articles from "../articleContent";
import ArticlesList from "../ArticlesList";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListPage;
