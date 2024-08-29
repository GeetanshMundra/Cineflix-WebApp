import React, { useEffect, useState } from "react";
import axios from "../../utils/Axios";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-[70%] h-[10vh] relative flex items-center ml-3">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Anything..."
        className="w-[60%] p-5 ml-5 mr-10 text-zinc-200 text-lg border-none outline-none bg-transparent"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-xl ri-close-line"
        ></i>
      )}
      <div className="z-[100] absolute w-[65%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
        {searches.length > 0 &&
          searches.map((s, i) => (
            <Link to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="inline-block hover:text-black hover:bg-zinc-400 duration-300 text-zinc-600 font-semibold w-[100%]
         p-5 border-b-2 border-zinc-100 flex justify-start items-center"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : noImage
                }
                alt=""
              />
              <span>
                {s.name || s.title || s.original_title || s.original_name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Topnav;
