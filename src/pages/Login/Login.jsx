import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="p-3" style={{ backgroundColor: "#F3F3F3" }}>
      <Container className="w-50 w-md-25 mx-auto">
        <h4 className="mb-3 text-center">Login your account</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
          <Button
            className="btn btn-dark w-100"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <Form.Text className=" fw-semibold">
            Don't Have An Account ?{" "}
            <Link className="text-decoration-none text-danger" to="/register">
              Register
            </Link>{" "}
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
