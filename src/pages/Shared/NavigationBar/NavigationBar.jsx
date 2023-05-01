import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-lg-4">
              <Link className="text-decoration-none" to="/category/0">
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
              {user && (
                <FaUserCircle
                  style={{
                    fontSize: "2rem",
                    color: "black",
                    margin: "10px",
                  }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button onClick={handleLogOut} className="px-5" variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="px-5" variant="dark">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
