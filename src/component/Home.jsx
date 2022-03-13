
import React from "react";
import { Container } from "react-bootstrap";
import Bottom_up from "./Animation/Bottom_up";

function Home() {

  

  

  return (
    <Container>
      <div className="home position-relative " style={{height: '90vh'}} id="Home">
        
        <div className="caption col-sm-12 col-md-6 p-5  ps-0  position-absolute top-50 start-25 translate-middle-y" style={{zIndex: 3, backgroundColor: "rgba(255, 255, 255, .5)", backdropFilter: "blur(8px)"}}>
          <Bottom_up class="" delay={0} child={
            <>
          <h1 className="headline">We help you make Modern Interior</h1>
          <p >
            we are a team of designers and developers that create high quality
            websites, apps, and other digital products using the latest
            technology and design.
          </p></>}/>
        </div>
        <div  className="col-sm-12 col-md-10 h-100 position-absolute top-50 end-0 translate-middle-y">

        <img
         className="w-100 h-100"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
          style={{objectFit: "cover"}}
          />
          </div>
      </div>

    </Container>
      
  );
}

export default Home;
