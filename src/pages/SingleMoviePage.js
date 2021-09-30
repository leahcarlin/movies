import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/SingleMoviePage.scss";

export default function SingleMoviePage() {
  const { id } = useParams();
  const [movieData, set_movieData] = useState({});

  console.log("render:", movieData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=d3923321&i=${id}`
      );
      set_movieData(res.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="SingleMovie">
      {movieData ? (
        <div className="MovieDetails">
          <h1>Learn more about:</h1>
          <h2>{movieData.Title}</h2>
          <p>Year: {movieData.Year}</p>
          <p>IMDb Rating: {movieData.imdbRating}</p>
          <img src={movieData.Poster} alt={movieData.Title} />
          <p className="plot">{movieData.Plot}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
