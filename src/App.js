import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./components/layout/header/Header";
import Home from "./components/home/Home";
import AboutFunc from "./components/about/AboutFunc";
import LoginForm from "./components/login/LoginForm";
import { Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import NotFound from "./components/404/NotFound";
import SingleProduct from "./components/product/SingleProduct";
import Categories from "./components/category/Categories";
import SingleCategory from "./components/category/SingleCategory";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <About /> */}
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutFunc />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:name" element={<SingleCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
