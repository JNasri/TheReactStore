import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axiosStore from "../../network/AxiosStore";
import { Link } from "react-router-dom";

function ExampleCarouselImage(props) {
  return (
    <img
      style={{ width: "20%", maxHeight: "300px" }}
      src={props.img}
      alt={props.text}
    />
  );
}

export default function CarouselHome() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosStore
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Carousel>
      {products.map((product, index) =>
        index < 4 ? (
          <Carousel.Item className="h-100" key={index} interval={2000}>
            <Link to={`/products/${product.id}`}>
              <ExampleCarouselImage img={product.image} text={product.title} />
              <Carousel.Caption>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ) : (
          ""
        )
      )}
    </Carousel>
  );
}
