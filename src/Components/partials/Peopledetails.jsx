import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLoadPeople,
  removePeople,
} from "../../store/actions/Peopleactions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "../Loader";
import Horizontalcards from "./HorizontalCards";
import Dropdown from "./Dropdown";

function Peopledetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);
  const [Category, setCategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncLoadPeople(id));
    return () => {
      dispatch(removePeople());
    };
  }, []);
  console.log(info);
  return info ? (
    <div className="realtive w-full overflow-hidden overflow-y-auto px-[5%] pb-[2%]">
      <nav className="w-full h-[10vh] flex items-center gap-10 text-md text-zinc-100">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line mr-3"
        ></Link>{" "}
      </nav>
      <div className="w-full flex">
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-5 mb-2 h-[2px] border-none bg-zinc-500" />
          <div className="text-md text-white flex gap-x-3">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <i class="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.imdb.com/name/${info.externalId.imdb_id}`}
            >
              imdb
            </a>
            {info.externalId.facebook_id && (
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalId.facebook_id}/`}
              >
                <i class="ri-facebook-circle-fill"></i>
              </a>
            )}
            {info.externalId.twitter_id && (
              <a
                target="_blank"
                href={`https://www.twitter.com/${info.externalId.twitter_id}/`}
              >
                <i class="ri-twitter-x-fill"></i>
              </a>
            )}
            {info.externalId.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalId.instagram_id}/`}
              >
                <i class="ri-instagram-fill"></i>
              </a>
            )}
          </div>
          <h1 className="text-xl text-zinc-400 font-semibold my-3">
            Personal Information
          </h1>
          <h1 className="text=md text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400 text-sm">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text=md text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400 text-sm">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text=md text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400 text-sm">{info.detail.birthday}</h1>
          <h1 className="text=md text-zinc-400 font-semibold mt-3">
            Death Day
          </h1>
          <h1 className="text-zinc-400 text-sm">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
          <h1 className="text=md text-zinc-400 font-semibold mt-3">
            Place Of Birth
          </h1>
          <h1 className="text-zinc-400 text-sm">
            {info.detail.place_of_birth}
          </h1>
          <h1 className="text=md text-zinc-400 font-semibold mt-3">
            Also Known As
          </h1>
          <h1 className="text-zinc-400 text-sm">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>
        <div className="w-[80%] ml-[1%] flex flex-col">
          <h1 className="text-5xl text-zinc-400 font-black mb-3">
            {info.detail.name}
          </h1>
          <h1 className="text-zinc-400 text-xl font-semibold">Biography</h1>
          <h1 className="text-zinc-400 text-sm mt-2">
            {info.detail.biography}
          </h1>
          <h1 className="mt-3 text-zinc-400 text-xl font-semibold">
            Known For
          </h1>
          <Horizontalcards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-lg font-semibold text-zinc-400">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-3 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-3">
            {info[Category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white p-3 rounded hover:bg-[#19191d] duration-300 cursor-pointer"
              >
                <Link to={`/${Category}/details/${c.id}`}>
                  <span className="text-sm">
                    {" "}
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5 text-sm">
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Peopledetails;
