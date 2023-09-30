import React, { useEffect, useState } from "react";
import axiosStore from "../../network/AxiosStore";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import CardCategory from "./CardCategory";

export default function Categories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axiosStore
      .get("/products/categories")
      .then((res) => {
        setCategory(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-fluid bg-info bg-opacity-10">
      <Row xs={1} md={2} className="g-4 m-4 text-center">
        {category.map((cat, idx) => {
          return (
            <div className="col-md-6 my-4 mx-auto">
              <Link key={idx} to={`${cat}`} style={{ textDecoration: "none" }}>
                <CardCategory
                  name={cat}
                  image={
                    idx === 0
                      ? require("../../images/electro.jpg")
                      : idx === 1
                      ? require("../../images/jewelery.jpg")
                      : idx === 2
                      ? require("../../images/men.jpg")
                      : require("../../images/women.jpg")
                  }
                />
              </Link>
            </div>
          );
        })}
      </Row>
    </div>
  );
}
