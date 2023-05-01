import React, { useState, useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";

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
    </Container>
  );
};

export default Header;
