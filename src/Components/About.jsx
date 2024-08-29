import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen bg-[#1F1E24] text-white flex flex-col items-center px-4 pt-4 overflow-hidden overflow-y-auto">
      {/* Header Section */}
      <h1 className="text-6xl mb-8 font-bold text-center text-[#6556CD]">
        About Cineflix
      </h1>

      <div className="max-w-4xl w-full">
        {/* Introduction Section */}
        <div className="bg-[#2a292f] p-6 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-semibold mb-4">Introduction</h2>
          <p className="text-xl text-gray-300">
            Welcome to Cineflix, your ultimate destination for exploring the
            world of movies and TV shows. Whether you're a casual viewer or a
            film enthusiast, Cineflix provides you with trailers, detailed
            information, and updates on trending, latest, most popular, and
            upcoming movies and TV shows. Dive deep into the world of
            entertainment and discover your next favorite watch. At Cineflix, we
            believe that actors are the heart of the entertainment industry. Our
            platform allows you to explore detailed profiles of actors,
            including their filmography, TV show appearances, and general
            information. Whether you're curious about an actor's career or
            looking for movies they've starred in, Cineflix has got you covered.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-[#2a292f] p-6 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-300">
            At Cineflix, our mission is to bridge the gap between viewers and
            the vast world of cinema and television. We strive to create a
            comprehensive platform where you can not only watch the latest
            trailers but also explore in-depth information about your favorite
            movies, TV shows, and actors. Our goal is to make discovering and
            learning about entertainment effortless and enjoyable, providing a
            one-stop solution for all your cinematic needs.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Cineflix. All rights reserved.
      </footer>
      <i
        onClick={() => navigate(-1)}
        class="absolute top-[5%] left-[10%] hover:text-[#6556CD] text-2xl font-semibold text-zinc-400 ri-arrow-left-line"
      ></i>
    </div>
  );
}

export default About;
