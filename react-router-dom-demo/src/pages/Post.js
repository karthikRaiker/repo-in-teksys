import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  console.log(query.get("name"));
  console.log(`useParams : `, useParams());
  console.log(`useLocation : `, useLocation());
  return (
    <div>
      <h1>Post Page</h1>
      <div>page id = {id}</div>
      <div>Name = {query.get("name")}</div>
      <div>Lord = {query.get("lord")}</div>
    </div>
  );
}

export default Post;
