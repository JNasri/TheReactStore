import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosStore from "../../network/AxiosStore";
import SkeletonProduct from "../product/SkeletonProduct";
import { Badge } from "react-bootstrap";

export default function SingleCategory() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    axiosStore
      .get(`products/category/${params.name}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, [params.name]);
  return (
    <div className="container-fluid">
      <div className="row row-cols-md-4 g-2 m-5">
        {loading ? ( // Render skeleton UI when loading is true
          <>
            <div className="col-md-3">
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </div>
            <div className="col-md-3">
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </div>
            <div className="col-md-3">
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </div>
            <div className="col-md-3">
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
              <SkeletonProduct />
            </div>
          </>
        ) : (
          products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
              key={product.id}
            >
              <div className="card p-1 h-100 d-flex border-info">
                <img
                  className="mx-auto"
                  src={product.image}
                  alt=""
                  style={{ width: "40%", height: "40%" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="badges">
                    <Badge bg="info me-1">{product.category}</Badge>
                    {product.id % 3 === 0 ? (
                      <Badge bg="danger me-1">NEW</Badge>
                    ) : (
                      ""
                    )}
                    {product.id % 2 === 0 ? (
                      <Badge bg="warning">SALE</Badge>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="card-text">
                    {product.description.length <= 50
                      ? product.description
                      : `${product.description.slice(0, 50)}...`}
                  </p>
                  <div className="startAtBottom">
                    <hr className="m-0 p-0" />
                    <h4>{product.price}$</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
