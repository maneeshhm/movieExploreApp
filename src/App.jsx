import { useState } from "react";
import "./App.css";
import Header from "./UIComponents/Header";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "The Fast and the Furious",
      Year: "2001",
      Rated: "PG-13",
      Released: "22 Jun 2001",
      Runtime: "106 min",
      Genre: "Action, Crime, Thriller",
      Director: "Rob Cohen",
      Writer: "Ken Li, Gary Scott Thompson, Erik Bergquist",
      Actors: "Vin Diesel, Paul Walker, Michelle Rodriguez",
      Plot: "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to end it.",
      Language: "English, Spanish",
      Country: "United States, Germany",
      Awards: "11 wins & 18 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
  ]);

  return (
    <>
      <Header></Header>
      <MovieList movies={movies}></MovieList>
    </>
  );
}

export default App;
