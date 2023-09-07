import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function reviewCard(review) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`${review.review_img_url}`}
        alt={`${review.title}`}
      />
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{review.category}</ListGroup.Item>
          <ListGroup.Item>{review.comment_count}</ListGroup.Item>
          <ListGroup.Item>{review.votes}</ListGroup.Item>
          <ListGroup.Item>
            {new Date(review.created_at).toLocaleDateString("en-gb", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </ListGroup.Item>
        </ListGroup>
        <Button href={`/reviews/${review.review_id}`} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default reviewCard;
