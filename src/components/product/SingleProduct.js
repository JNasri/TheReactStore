import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonProduct from "./SkeletonProduct";
import axiosStore from "../../network/AxiosStore";

export default function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true); // Added loading state
  useEffect(() => {
    axiosStore
      .get(`/products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, [params.id]);
  return (
    <div className="container-fluid">
      <div className="row m-4">
        {loading ? ( // Render skeleton UI when loading is true
          <>
            <SkeletonProduct />
          </>
        ) : (
          <>
            <div className="card border-info col-md-3">
              <img
                src={product.image}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-md-8 ps-3">
              <h2>{product.title}</h2>
              <h5>{product.category}</h5>
              <hr />
              <p>{product.description}</p>
              <h2>{product.price}$</h2>
              <div className="btn btn-outline-info me-1 px-5">BUY</div>
              <div
                className="btn btn-outline-danger px-3"
                onClick={() => {
                  axiosStore
                    .delete(`/products/${params.id}`)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                DELETE
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
