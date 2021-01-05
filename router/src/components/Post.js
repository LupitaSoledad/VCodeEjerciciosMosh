import React from "react";

const Post = () => {
  return (
    <div className="title">
      <h2>Post </h2>

      <h5 className="postEs">lo mas vendido:</h5>
      <table>
        <tr>
          <th>Categoria</th>
          <th>%</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>
    </div>
  );
};

export default Post;
