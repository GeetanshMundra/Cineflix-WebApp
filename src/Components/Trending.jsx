import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader";
import Cards from "./partials/Cards";
import axios from "../utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  document.title = "Cineflix | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      // setTrending(data.results);
      if(data.results.length > 0) {
        setTrending((prev)=>[...prev,...data.results]);
        setPage((prevPage) => prevPage + 1);
      }
      else {
        setHasMore(false);
      }
      console.log(trending);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () =>{
    if(trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  }

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line mr-3"
          ></i>{" "}
          Trending<small className="text-sm ml-2 text-zinc-500">({category})</small>
        </h1>
        <div className="flex items-center w-[85%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={trending} title={category}/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Trending;
