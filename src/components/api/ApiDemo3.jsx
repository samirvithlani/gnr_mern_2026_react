import axios from "axios";
import React, { useState } from "react";

export const ApiDemo3 = () => {
  const [movies, setmovies] = useState([]);
  const [movieName, setmovieName] = useState("")
  const getMovie = async () => {
    const res = await axios.get(
      //`http://www.omdbapi.com/?apikey=add your key&s=Avatar`,
      `http://www.omdbapi.com/?apikey=add your key&s=${movieName}`,
    );
    console.log(res); //axios object
    console.log(res.data); //api response
    setmovies(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>ApiDemo3</h1>
      <input type="text" onChange={(event)=>{setmovieName(event.target.value)}}></input>
      <button
        onClick={() => {
          getMovie();
        }}
      >
        SEARCH
      </button>
      <div className="container">
        <div className="row">
          {movies.map((movie) => {
            return (
                //row coln
              <div className="col-md-4 col-sm-6 mb-3">
                {/* //card */}
                <div
                  className="card"
                  style={{
                    width: "100%",
                    border: "none",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={movie.Poster}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px 10px 0 0",
                    }}
                  ></img>
                  {/* //card body */}
                  <div className="card-body" style={{ padding: "15px" }}>
                    <h5
                      className="card-title"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {movie.Title}
                    </h5>
                    <p>
                        {movie.Year}
                    </p>
                    <p>
                        {movie.imdbID}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
