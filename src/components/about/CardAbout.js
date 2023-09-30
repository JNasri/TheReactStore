import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function CardAbout(props) {
  return (
    <Col className="my-4 m-3">
      <Card className="h-100 border-info">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.role}</Card.Text>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
