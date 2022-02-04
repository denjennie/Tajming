import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import jsonfiles from "../jsonfiles/cities-timezones.json";
import { SearchCity } from "./SearchCity";
import earth from "/src/images/earth.png";
import { Link } from "react-router-dom";

//here the navbar begins
const NavbarOne = () => {
  return (
    <Navbar id="navbarBackground" expand="lg">
      {/*The fluid makes the container responsive */}
      <Container fluid>
        <Navbar.Brand id="Logo" href="">
          {/* A link to homepage */}
          <Link id="textLogo" to="/">
            {" "}
            TAJMING
          </Link>
          <img src={earth} height="50" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* When the screen turns medium or smaller, then the navbar is showing a "hamburgermenu"  */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {" "}
            <Nav.Link id="MyCities" href="/MinaStader">
              {" "}
              Mina Städer
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <SearchCity data={jsonfiles} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarOne;
