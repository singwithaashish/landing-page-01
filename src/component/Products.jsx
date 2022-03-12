import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../data.json"

function Products() {
  const [filter, setFilter] = useState(0);
  const [showAll, setShowAll] = useState(false);
  return (
    <Container>
      <div className="top">
        <div className="d-flex justify-content-between align-items-bottom mt-5">
          <h1 className="bold_primary">Products</h1>
          <p onClick={() => setShowAll(!showAll)} style={{cursor: "pointer"}}>
            see all{" "}
            <span>
              <i className="bi bi-arrow-right"></i>
            </span>
          </p>
        </div>
        <div className="options d-flex justify-content-center my-5">
          {["All", "Bed", "Sofa", "Chair", "Light"].map((s, i) => (
            
            <a
            className={" mx-4 " + (i === filter ? "text-dark" : "text-secondary")}
            onClick={() => {
              setFilter(i);
              // setShowAll(false);
            }}
            style={{cursor: "pointer"}}
              key={i}
            >
              {s}
            </a>
            
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="grid_products">
            {data.products.slice(0, showAll ? data.products.length : 6).map((product, i) => (
             
              <ProductCard {...product} filter={filter} key={i}/>
              
              
              ))
            }
          
        </div>
      </div>
    </Container>
  );
}

export default Products;

function ProductCard({image_url_png, id, title, price, filter}) {
  return (id % filter === 0 || filter === 0) && (
    <div
      className="bg-light p-4 pt-5 position-relative"
      style={{
        height: "15rem",
        marginBottom: "4rem",
      }}
    >
      <i
        className="bi bi-cart4 position-absolute top-0 translate-middle"
        style={{
          right: "2rem",
          backgroundColor: "tomato",
          padding: "0.5rem 0.6rem",
          borderRadius: "50%",
        }}
      ></i>
      <h3 className="fs-4 mb-3">{title}</h3>
      <span className="d-flex justify-content-between">
        <p>{price}</p>
        <p className="text-decoration-line-through text-secondary">$50.00</p>
      </span>
      <img
        src={image_url_png}
        width="200px"
        height="200px"
        style={{objectFit: "cover"}}
        alt=""
        className="position-absolute top-100 start-50 translate-middle"
      />
    </div>
  );
}
