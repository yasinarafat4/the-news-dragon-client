import React from "react";
import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <div>
      <h4>Our terms and conditions</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        tenetur vero? Beatae debitis sapiente rem repellendus autem quae,
        consequatur corporis!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
