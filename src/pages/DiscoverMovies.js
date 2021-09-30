import React from "react";
import { useState } from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem.js";

export default function DiscoverMovies() {
  const [searchText, set_searchText] = useState("");
  const [state, set_state] = useState({ status: "idle" });

  const search = async () => {
    if (searchText === "") {
      set_state({ status: "idle" });
      return;
    }

    set_state({ status: "searching" });

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParameter = encodeURIComponent(searchText);

    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=d3923321&s=${queryParameter}`
    );
    set_state({ status: "done", data: res.data.Search });
  };

  return (
    <div>
      <h1>Discover Some Movies!</h1>
      <input
        value={searchText}
        onChange={(event) => set_searchText(event.target.value)}
      />
      <button onClick={search}>Search</button>
      {state.status === "idle" && (
        <p>Type in a search term and click 'Search' to start...</p>
      )}
      {state.status === "searching" && <p>Searching ...</p>}
      {state.status === "done" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 -10px",
          }}
        >
          {state.data.map((movie) => (
            <MovieItem
              key={movie.imdbID}
              id={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
            />
          ))}
        </div>
      )}
    </div>
  );
}
