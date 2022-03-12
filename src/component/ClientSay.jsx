import { Carousel } from "bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
import data from "../data.json";

function ClientSay() {
  const [index, setIndex] = React.useState(0);
  return (
    <Container className="p-5 bg-light">
      <div className="top text-center">
        <h1 className="bold_primary mt-5">What our happy client say</h1>
        <p className="text-secondary">
          At kastamandap, we take pride in our values - <br />
          services integrity and exellence
        </p>
      </div>
      <div className="bottom mt-5">
        {/* <Carousel>
                <Carousel.Item>
                </Carousel.Item>
            </Carousel> */}
        <TestimonialSlider
          testimonials={data.testimonials}
          index={index}
          setIndex={setIndex}
        />
        {/* {data.testimonials.map((testimonial) => (
        ))} */}
      </div>
    </Container>
  );
}

const TestimonialSlider = ({ testimonials, index, setIndex }) => {
  return (
    <div className="row">
      <img
        src={testimonials[index].image_url}
        width="230px"
        height="360px"
        style={{ objectFit: "cover" }}
        alt="client"
        className="me-5 mb-5 col-sm-12 col-md-6"
      />
      <div className="d-flex col-sm-12 col-md-4 flex-column justify-content-between">
        <div>
        <h3>furni.shop</h3>
        <p className="fw-bolder fst-italic text-secondary">
          {testimonials[index].comment}
        </p>
        <p>{testimonials[index].name}</p>
        <h6>{testimonials[index].position}</h6></div>
        <div className="d-flex">
          <i
            className="bi bi-arrow-left-circle-fill fs-2 me-3"
            onClick={() => setIndex(index <= 0 ? 0 : index - 1)}
          ></i>
          <i
            className="bi bi-arrow-right-circle-fill fs-2"
            onClick={() =>
              setIndex(index < testimonials.length-1 ? index + 1 : index)
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
