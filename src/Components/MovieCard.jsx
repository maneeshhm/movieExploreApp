import { Col, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
