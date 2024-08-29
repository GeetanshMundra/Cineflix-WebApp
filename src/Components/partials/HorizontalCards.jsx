import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

function Horizontalcards({ data }) {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-3 p-3">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[15%] h-[40vh] overflow-y-auto bg-zinc-900 mr-5"
          >
            <img
              className="w-full h-[55%] object-cover"
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.poster_path || d.backdrop_path
                    }`
                  : noImage
              }
              alt=""
            ></img>
            <div className="text-white p-2 h-[45%]">
              <h1 className="font-semibold text-md mb-1">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mb-5 text-xs">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500 text-xs"> more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl font-black text-white text-center">
          Nothing to show
        </h1>
      )}
    </div>
  );
}

export default Horizontalcards;
