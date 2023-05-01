import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryInsights from "../../News/CategoryInsights/CategoryInsights";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h4>All Category</h4>
      <div className="ps-4 ">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              style={{ color: "#9F9F9F", fontSize: "20px" }}
              className=" text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
        <CategoryInsights></CategoryInsights>
      </div>
    </>
  );
};

export default LeftNav;
