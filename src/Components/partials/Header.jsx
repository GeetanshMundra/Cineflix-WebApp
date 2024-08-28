import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[70vh] flex flex-col justify-end items-start p-[4%]"
    >
      <h1 className="w-[70%] text-white font-black text-5xl">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[50%] mt-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400"> more</Link>
      </p>
      <p className="text-white mt-3 mb-5 text-lg">
      <i className="text-yellow-400 ri-megaphone-fill"></i>{" "}{data.release_data || "No Infomation"}
      <i className="text-yellow-400 ml-5 ri-album-fill"></i>{" "}{data.media_type.toUpperCase()}
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="bg-[#6556CD] p-4 rounded font-semibold text-white text-lg">Watch Trailer</Link>
    </div>
  );
}

export default Header;
