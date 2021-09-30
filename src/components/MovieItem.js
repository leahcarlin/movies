import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";

export default function MovieItem(props) {
  const { title, id, poster } = props;

  return (
    <div
      className="MovieItem"
      style={{
        margin: "10px",
        padding: "10px",
        border: "solid",
      }}
    >
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{id}</p>
      <img
        src={poster}
        alt={title}
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}
