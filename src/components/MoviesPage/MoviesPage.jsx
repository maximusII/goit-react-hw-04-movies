import React from "react";
import styles from "./MoviesPage.module.css";
// import { fetchMovies } from "../../services/fetcher";
// import MoviesList from "./MoviesList/MoviesList";
// import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

// class MoviesPage extends Component {
//   state = { movies: [] };

//   componentDidMount() {
//     fetchMovies()
//       .then(alldata => alldata.data)
//       .then(data => data.results)
//       .then(movies => this.setState({ movies }));
//   }

//   render() {
//     const { movies } = this.state;
//     return (
//       <div>
//         <h1>Movies</h1>
//         <MoviesList movies={movies} />
//       </div>
//     );
//   }
// }

// export default MoviesPage;

const MoviesPage = () => {
  return <h1>Movies</h1>;
};

export default MoviesPage;
