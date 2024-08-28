import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return  (
    <div className="absolute top-0 left-0 z-[100] bg-[rgba(0,0,0,.9)] w-screen h-screen flex items-center justify-center">
      <i
        onClick={() => navigate(-1)}
        className="absolute top-10 left-20 hover:text-[#6556CD] text-3xl ri-close-fill text-white"
      ></i>
      {ytvideo ? <ReactPlayer
        height={700}
        width={1400}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      /> : <NotFound/> }
    </div>
  );
}

export default Trailer;
