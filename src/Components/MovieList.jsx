import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      <Row xs={1} md={4} className="g-4 justify-content-md-center my-2 mx-2 ">
        {movies.map((movie) => (
          <>
            <MovieCard movie={movie}></MovieCard>
          </>
        ))}
      </Row>
    </>
  );
};

export default MovieList;
