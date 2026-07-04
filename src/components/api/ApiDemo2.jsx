import axios from "axios";
import React, { useEffect, useState } from "react";

export const ApiDemo2 = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />

                <div className="card-body" style={{ padding: "15px" }}>
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {product.title}
                  </h5>

                  <p style={{ margin: 0, color: "gray" }}>
                    Category: {product.category}
                  </p>

                  <p
                    style={{
                      marginTop: "5px",
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Price: RS {product.price}
                  </p>

                  <p style={{ color: "#666" }}>Rating: {product.rating} ⭐</p>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
