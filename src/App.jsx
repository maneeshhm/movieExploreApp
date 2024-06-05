import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Header from "./UIComponents/Header";
import MovieList from "./Components/MovieList";
import SpinnerStyle from "./UIComponents/SpinnerStyle";

function App() {
  //set error if there is any error when calling API
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // loading intial popular movies
  const popularMovies = [
    "tt12037194",
    "tt17279496",
    "tt1684562",
    "tt1392190",
    "tt11389872",
    "tt15239678",
    "tt16426418",
    "tt5672290",
  ];
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const BASEURL = "http://www.omdbapi.com/?apikey=94c4d5fe";

    setIsLoading(true);
    const fetchMovies = async () => {
      const data = [];

      try {
        for (const id of popularMovies) {
          const response = await fetch(`${BASEURL}&i=${id}`);
          const movieData = await response.json();
          data.push(movieData);
        }
      } catch (e) {
        setIsError(e);
      } finally {
        setIsLoading(false);
      }

      setMovies(data);
      console.log(data);
    };
    fetchMovies();
  }, []);

  //display MovieList component according to the conditions
  let movieComponent;
  if (isError) {
    movieComponent = <h1>Error is occured</h1>;
  } else if (isLoading) {
    movieComponent = <SpinnerStyle></SpinnerStyle>;
  } else {
    movieComponent = <MovieList movies={movies}></MovieList>;
  }

  return (
    <>
      <Header></Header>
      {movieComponent}
    </>
  );
}

export default App;
