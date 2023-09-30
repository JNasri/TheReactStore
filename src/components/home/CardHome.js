import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function CardHome(props) {
  return (
    <Col className="my-2">
      <Link to={`/categories/${props.title}`} style={{textDecoration: "none"}}>
        <Card className="h-100">
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              aspernatur omnis numquam at molestiae doloremque.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
