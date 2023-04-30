import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div style={{ backgroundColor: "#f3f3" }} className="d-flex p-3 mb-2">
        <Button variant="danger">Latest</Button>
        <Marquee
          className="text-danger fw-semibold"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          speed={40}
          gradient={false}
          pauseOnHover={!isPaused}
        >
          <b>Political Turmoil:</b> Protests Erupt in Belarus Following
          Controversial Election Results ! <b>Tech News:</b> Apple Unveils New
          Lineup of iPhones at Annual Event ! <b>Business Report:</b> Amazon's
          Jeff Bezos Steps Down as CEO, Hands Over Reigns to Andy Jassy !
          <b>Environment Watch: </b> Record-breaking Heat Wave Sweeps Across
          Western U.S. ! <b>Education News:</b> College Admissions Scandal
          Resurfaces with Sentencing of Parents and Coaches !{" "}
          <b>International Update: </b> Taliban Captures Key Afghan City Amid
          U.S. Troop Withdrawal ! <b>Sports Update:</b> Tennis Star Rafael Nadal
          Withdraws from Wimbledon !
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-lg-4">
              <Link className="text-decoration-none" to="/">
                Home
              </Link>
              <Link className="text-decoration-none" to="">
                About
              </Link>
              <Link className="text-decoration-none" to="">
                Career
              </Link>
            </Nav>
            <Nav>
              <Link className="text-decoration-none me-4">Profile</Link>
              <Link>
                <Button className="px-5" variant="dark">
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
