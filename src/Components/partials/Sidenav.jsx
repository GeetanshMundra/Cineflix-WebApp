import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-3"></i>
        <span className="text-2xl">CINEFLIX</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 gap-1 text-md">
        <h1 className="font-semibold text-white text-lg mt-10 mb-3">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-fire-fill"></i>
          Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-bard-fill"></i>
          Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-tv-2-fill"></i>
          TV Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400"/>
      <nav className="flex flex-col text-zinc-400 gap-3 text-md">
        <h1 className="font-semibold text-white text-lg mt-7 mb-1">
          Website Information
        </h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-information-fill"></i>
          About Cineflix
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
          <i className="mr-3 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
