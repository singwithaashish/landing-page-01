import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="p-5" style={{background: "#537173"}}>
      <Container>
        <div className="top row">
          <h2 className="text-light fw-bold col-sm-8 col-md-5 me-md-auto ">
            Start your business today for $0+ state fee
          </h2>
          <div className="d-flex align-items-start col-sm-12 col-md-6">
            <a href="#" className="get_st">
              Get Started
            </a>
            <a href="#" className="cont_s">
              Contact Sales
            </a>
          </div>
        </div>
        <hr className="bg-light my-5" />
        <div className="bottom row">
          <div className="company col-sm-12 col-md-3 me-auto text-light">
            <h3>furni.shop</h3>
            <p>
              optix seamlessly integrates your business with the cloud to
              deliver the best experience for your customers.
            </p>
            <div className="d-flex">
              <i className="bi bi-facebook me-3 "></i>
              <i className="bi bi-twitter me-3 "></i>
              <i className="bi bi-linkedin me-3 "></i>
              <i className="bi bi-pinterest me-3 "></i>
            </div>
          </div>
          
          
          <Extras
            top={"Entity type"}
            remaining={[
              "Knowledge base",
              "Security",
              "privacy policy",
              "Partners",
              "About Us",
              "FAQs",
            ]}
          />
          <Extras
            top={"Services"}
            remaining={[
              "Contact Us",
              "Press",
              "Payroll",
              "Library",
              "Blog",
              "Help Center",
            ]}
          />
          <Extras
            top={"Resources"}
            remaining={[
              "Pricing",
              "FAQs",
              "Contact Support",
              "Privacy Policy",
              "Terms",
              
            ]}
          />
          <Extras
            top={"Support"}
            remaining={[
              "Contact",
              "Affiliate",
              "Sitemap",
              "Cancellation Policy",
              "Pricing",
              
            ]}
          />
          
        </div>
      </Container>
    </div>
  );
}

const Extras = ({ top, remaining }) => {
  return (
    <div className="my-4 col-sm-6 col-md-2 my-sm-3">
      <p style={{color: "#fff", fontSize: "1.2rem"}}>{top}</p>
      <div className="d-flex justify-content-start flex-column">
        {remaining.map((item, i) => (
          <a key={i} className="text-light fs-6" style={{ textDecoration: "none"}} href="#">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
