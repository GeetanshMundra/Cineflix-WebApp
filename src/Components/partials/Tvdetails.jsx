import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../../store/actions/Tvactions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "../Loader";
import Horizontalcards from "./HorizontalCards";

function Tvdetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);
  console.log(info);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="realtive w-full overflow-hidden overflow-y-auto px-[8%]"
    >
      <nav className="w-full h-[10vh] flex items-center gap-10 text-xl text-zinc-100">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line mr-3"
        ></Link>{" "}
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
        >
          imdb
        </a>
      </nav>
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[55vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="ml-10 content">
          <h1 className="font-black text-6xl text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            {info.detail.first_air_date && (
              <span className="ml-3 text-2xl text-zinc-200 font-bold">
                ({info.detail.first_air_date.split("-")[0]})
              </span>
            )}
          </h1>
          <div className="mt-3 mb-5 flex items-center gap-x-3 text-white">
            <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            {info.detail.first_air_date && (
              <h1 className="text-lg text-white font-semibold">
                {info.detail.first_air_date}
              </h1>
            )}
            <h1 className="text-lg text-white font-semibold">
              {info.detail.genres.map((g) => g.name).join(", ")}
            </h1>
            <h1 className="text-lg text-white font-semibold">
              {info.detail.episode_run_time} min
            </h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="mt-5 mb-1 text-2xl text-white text-semibold">
            Overview
          </h1>
          <p className="text-white text-xl mb-10">{info.detail.overview}</p>
          {/* <h1 className="mt-5 mb-1 text-2xl text-white">Translations</h1>
          <p className="mb-10 text-white text-md">
            {info.translations.join(", ")}
          </p> */}
          <Link
            className="p-5 text-white text-lg rounded-lg bg-[#6556CD]"
            to={`${pathname}/trailer`}
          >
            <i class="mr-3 ri-play-large-fill"></i>Play Trailer
          </Link>
        </div>
      </div>
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="text-md text-zinc-200 font-semibold">
              Available on Platform
            </h1>
            {info.watchProvider.flatrate.map((d, i) => (
              <img
                key={i}
                title={d.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="text-md text-zinc-200 font-semibold">
              Available on Rent
            </h1>
            {info.watchProvider.rent.map((d, i) => (
              <img
                key={i}
                title={d.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
        {info.watchProvider && info.watchProvider.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1 className="text-md text-zinc-200 font-semibold">
              Available to Buy
            </h1>
            {info.watchProvider.buy.map((d, i) => (
              <img
                key={i}
                title={d.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${d.logo_path}`}
                alt=""
              ></img>
            ))}
          </div>
        )}
      </div>
      <hr className="mt-10 mb-5 h-[2px] border-none bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">Seasons</h1>
      <div className="w-[100%] flex overflow-y-hidden overflow-x-auto p-5">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <div key={i} className="w-[15%] mr-[2%]">
              <img
                className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] min-w-[25vh] h-[30vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                alt=""
              ></img>
              <h1 className="font-semibold text-2xl mt-3 text-zinc-300">
                {s.name || s.title || s.original_name || s.original_title}
              </h1>
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-black text-white text-center">
            Nothing to show
          </h1>
        )}
      </div>
      <hr className="mt-5 mb-5 h-[2px] border-none bg-zinc-500" />
      <h1 className="text-3xl text-white font-bold">
        Recommendations & Similar Stuff
      </h1>
      <Horizontalcards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default Tvdetails;
