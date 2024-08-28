import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader";
import Cards from "./partials/Cards";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
  document.title = "Cineflix | Tvshows";
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTvshows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTvshows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      // setTvshows(data.results);
      if (data.results.length > 0) {
        setTvshows((prev) => [...prev, ...data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tvshows.length === 0) {
      getTvshows();
    } else {
      setPage(1);
      setTvshows([]);
      getTvshows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return tvshows.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-3"
          ></i>{" "}
          Tvshows<small className="text-sm ml-2 text-zinc-500">({category})</small>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvshows.length}
        next={getTvshows}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={tvshows} title="tv"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Tvshows;
