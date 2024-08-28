import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import Horizontalcards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader";

function Home() {
  document.title = "Cineflix | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const getRandomWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const randomWallpaper =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomWallpaper);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && getRandomWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="flex justify-between px-5 pt-5">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <Horizontalcards data={trending} />
      </div>
    </>
  ) : (
    <Loader/>
  );
}

export default Home;
