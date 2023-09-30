import React from "react";
import "./Home.css";
import CarouselHome from "./CarouselHome";
import CardHome from "./CardHome";
import { Link } from "react-router-dom";

// 'Home' class component
class Home extends React.Component {
  // state that has counter with initial value of 1
  state = {
    counter: 0,
  };
  // function used to update the state when adding
  add = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  // function used to update the state when subtracting
  sub = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  // render function to return JSX
  render() {
    console.log("from render");
    return (
      <>
        <div className="container-fluid p-0 bg-light">
          <div className="row g-0 py-5 bg-info bg-opacity-10">
            <div className="col-12 text-center">
              <div className="row p-3">
                <h3>
                  Welcome To
                  <br />
                  <span className="display-1 bg-dark text-white d-inline-block">
                    The <span className="text-info">React</span> Store
                  </span>
                  <br />
                  the best online store for buying everything you need
                </h3>
              </div>
              <div className="row w-75 mx-auto">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore doloremque ex placeat, illo velit cumque reprehenderit
                  recusandae aut iste atque accusantium eum non quis laboriosam
                  architecto dignissimos, hic id voluptatibus debitis. Explicabo
                  voluptate quaerat omnis minus laboriosam natus rerum sunt et
                  sit, saepe non quisquam! Veritatis illo sapiente ex blanditiis
                  quam repellendus ducimus maiores a eius illum, consequatur
                  rerum tenetur autem esse optio id, iste ipsam totam omnis
                  corrupti fugiat. Perspiciatis pariatur cum id necessitatibus.
                </h5>
              </div>
              <div className="row my-3">
                <div className="col-12 ">
                  <Link to={"/products"}>
                    <div className="btn btn-info btn-lg mx-2">Products</div>
                  </Link>
                  <Link to={"/Categories"}>
                    <div className="btn btn-info btn-lg mx-2">Categories</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row h-50 py-5 w-100 g-0 bg-image text-center text-white">
            <h1 className="display-3 my-5">More than 50,000 Products!</h1>
            <CarouselHome />
            <div className="my-3"></div>
          </div>

          <div className="row g-0 py-5 bg-info bg-opacity-10">
            <div className="col-12 text-center">
              <div className="row p-3 mt-5">
                <h2>
                  From Electorics to Women's Clothing,{" "}
                  <span className="h2 bg-dark text-white d-inline-block">
                    The <span className="text-info">React</span> Store
                  </span>{" "}
                  got all your needs
                </h2>
              </div>
              <div className="row m-5">
                <CardHome
                  img={require("../../images/electro.jpg")}
                  title={"electronics"}
                />
                <CardHome
                  img={require("../../images/jewelery.jpg")}
                  title={"jewelery"}
                />
                <CardHome
                  img={require("../../images/men.jpg")}
                  title={"men's clothing"}
                />
                <CardHome
                  img={require("../../images/women.jpg")}
                  title={"women's clothing"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    // console.log("from mount");
  }

  componentDidUpdate() {
    // console.log("from update");
  }
  componentWillUnmount() {
    // console.log("from unmount");
  }
}

// exporting the class
export default Home;
