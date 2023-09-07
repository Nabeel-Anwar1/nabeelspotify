import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function reviewCard(review) {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <Card className="list-items">
        <Card.Img
          variant="top"
          src={`${review.review_img_url}`}
          alt={`${review.title}`}
          className="reviewImgs"
        />
        <Card.Body>
          <Card.Title>{review.title}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Category: {review.category}</ListGroup.Item>
            <ListGroup.Item>Comments: {review.comment_count}</ListGroup.Item>
            <ListGroup.Item>Votes: {review.votes}</ListGroup.Item>
            <ListGroup.Item>
              Created:{" "}
              {new Date(review.created_at).toLocaleDateString("en-gb", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default reviewCard;
