import React from "react";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

function Cards({ data, title }) {
  return (
    <div className="px-[5%] flex justify-start flex-wrap w-full bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[32vh] mr-[3%] mt-[3%]"
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noImage
            }
            alt=""
          />
          <h1 className="text-2xl font-semibold mt-3 text-zinc-400">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average > 0 && (
            <div className="absolute right-[5%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
