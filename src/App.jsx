import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import About from "./Components/About";
import ContactUs from "./Components/Contact";
import Moviedetails from "./Components/partials/Moviedetails";
import Tvdetails from "./Components/partials/Tvdetails";
import Peopledetails from "./Components/partials/Peopledetails";
import Trailer from "./Components/partials/Trailer";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route
            path="/movie/details/:id/trailer"
            element={<Trailer />}
          ></Route>
        </Route>
        <Route path="/tv" element={<Tvshows />}></Route>
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />}></Route>
        </Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/people/details/:id" element={<Peopledetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
