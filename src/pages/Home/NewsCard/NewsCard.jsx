import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url } = news;
  console.log(image_url);
  return (
    <Card className="mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{}details</> : details.slice(0, 250)}...{" "}
          <br />{" "}
          <Link
            to={`/news/${_id}`}
            className="text-decoration-none text-warning"
          >
            Read More
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsCard;
