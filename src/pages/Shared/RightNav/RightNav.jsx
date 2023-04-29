import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../Q-zone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <div className="d-flex flex-column gap-1">
        <Button variant="outline-primary">
          <FaGoogle /> Login with Google{" "}
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="mt-3">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF style={{ color: "#3B599C" }} /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter style={{ color: "#58A7DE" }} /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram style={{ color: "#D82D7E" }} /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative text-center">
        <img src={bg} className="img-fluid" alt="" />
        <div className="position-absolute top-50 start-50 translate-middle ">
          <h3 className="display-6 fw-bold text-white ">
            Create an Amazing Newspaper
          </h3>
          <p className="text-white ">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-danger btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
