import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"

export default function Footer() {
  return (
    <>
    <Container fluid className='main-footer-container'> 
      <Row className='bg-dark text-white justify-content-center'>
        <Col xs={6} className='main-footer-col'>
          {"All Rights Reserved 2023"}
        </Col>
      </Row>
    </Container>
    </>
  )
}
