import React from "react";

export default function MovieList(props) {
  console.log("props", props);
  const { title, id, poster } = props;

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        border: "solid",
      }}
    >
      <h2>{title}</h2>
      <p>{id}</p>
      <img
        src={poster}
        alt={title}
        style={{ display: "block", maxWidth: "100%" }}
      />
    </div>
  );
}
