import { Col, Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
