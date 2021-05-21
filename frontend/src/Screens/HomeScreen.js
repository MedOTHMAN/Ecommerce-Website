import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.js";
import axios from "axios";

function HomeScreen(props) {
  console.log(props);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    return () => {
      
    }
  }, [])

  return (
    <ul className="products">
      {products.map((product) => (
        <li>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                src={product.image}
                className="product-image"
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link key={product} to={"/product/" + product._id}>
                {product.name}
              </Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">
              {product.rating} Stars {product.numReviews}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
