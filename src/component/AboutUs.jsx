import React from "react";
import { Button, Container } from "react-bootstrap";
import '../index.css'
import Bottom_up from "./Animation/Bottom_up";

function AboutUs() {
  return (
    <Container>
      <div className="about_us" id="About">
        <div className="top w-100 my-5 py-5 d-flex justify-content-between">
          <Bottom_up class={'left'}
          child={
          <div className="left">
            <h1
              className="bold_primary"
            >
              About us
            </h1>
            <p className="text-secondary">
              At kastamandap, we take pride in our values - <br />
              services integrity and exellence
            </p>
          </div>}
          duration={0.3}/>
          <Bottom_up
          class={''}
          delay={0.5}
          child={
          <Button
            variant="light"
            className="text-secondary shadow-lg"
            style={{ height: "3.5rem" }}
          >
            Learn more
          </Button>}/>
        </div>
        <div className="bottom row " >
          <div className="left col-sm-12 col-md-6 h-100 ">
            <span className="d-flex">
              <Point
                ind={1}
                ques={"who we are"}
                ans={
                  "We are infinite. we shape the world and ensure our global dominence"
                }
              />
              <Point
                ind={2}
                ques={"what do we do"}
                ans={
                  "We give you free cources that guide you through the process"
                }
              />
            </span>
            <span className="d-flex ">
              <Point
                ind={3}
                ques={"How do we help"}
                ans={
                  "we provide multimedia cources to provide you with coatching"
                }
              />
              <Point
                ind={4}
                ques={"create success story"}
                ans={
                  "We have assisted and helped over 1000+ business achieve success overtime"
                }
              />
            </span>
          </div>
          <Bottom_up class="right d-flex col-sm-12 col-md-6 col-lg-6" delay={0.5} child={
          <>
            <span className=" w-50 d-flex flex-column align-items-end mt-5 ">
              
              <img className="about_small_img" src="https://images.pexels.com/photos/7846313/pexels-photo-7846313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="cat1" />
              <img className="about_big_img" src="https://images.pexels.com/photos/11070660/pexels-photo-11070660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="cat1" />
            </span>
            <span className="d-flex flex-column w-50 mb-5">
              <img className="about_big_img" src="https://images.pexels.com/photos/10142912/pexels-photo-10142912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="cat1" />
              <img className="about_small_img" src="https://images.pexels.com/photos/11310113/pexels-photo-11310113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="cat1" />
            </span>
            
            </>}/>
        </div>
      </div>
    </Container>
  );
}

const Point = ({ ind, ques, ans }) => (
  <Bottom_up child={
  <div className="">
    <h1
      className="bold_primary"
    >
      {ind}.
    </h1>
    <h3
      style={{
        fontSize: "1.3rem",
        fontWeight: "bold",
        color: "#537173",
      }}
    >
      {ques}
    </h3>
    <p className="text-secondary">{ans}</p>
  </div>}
  delay={ind/10}
  class={'point w-50 p-2 ps-0'}
  />
);

export default AboutUs;
