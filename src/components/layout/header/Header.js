import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container fluid>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <Navbar.Brand>
            <img src="./logo512.png" width={60} alt="" />
            <span className="me-5 ms-2">
              {" "}
              The <span className="text-info">React</span> Store
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto h5">
            <NavLink
              to="/"
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/login"
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              Profile
            </NavLink> */}
            <NavLink
              to="/about"
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              Products
            </NavLink>
            <NavLink
              to="/categories"
              className="navLink"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              Category
            </NavLink>
          </Nav>
          <Form className="d-flex custom-form">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
