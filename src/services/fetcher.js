import axios from "axios";

const options = {
  BASE_URL: "https://api.themoviedb.org/3/trending/all/day?",
  API_KEY: "api_key=04cb9f1be532535b42e85e3384d1506e"
};

export const fetchMovies = () =>
  axios.get(`${options.BASE_URL + options.API_KEY}`);

export const fetchMovieWithId = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}?${options.API_KEY}&language=en-US`
  );

// export const fetchMovieImagesWithId = id =>
//   axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/images?${options.API_KEY}`
//   );
