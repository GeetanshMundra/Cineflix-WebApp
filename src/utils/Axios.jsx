import axios from "axios";
// require('dotenv').config();



const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});



export default instance;