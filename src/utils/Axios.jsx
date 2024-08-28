import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk4YmUxMWU1Mjk3NmQ1ZTg2MGRhYmVkNDkzYTNkNSIsIm5iZiI6MTcyNDU3ODAzMy41OTIwNiwic3ViIjoiNjZjYWY3NzJmNWM2ZmJlMTc0M2QxMjMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.P8NneoXb-u2PBH98SKQB58cIp5WnvQkWF3a4WoFadD0",
  },
});

export default instance;