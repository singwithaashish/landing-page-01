import React from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import Bottom_up from "./Animation/Bottom_up";

function HotDeals() {
  return (
    <div>
      <Container>
        <div className="row my-5 py-5 ">
          <Bottom_up
            class={"deals col-sm-12 col-md-3"}
            delay={0.1}
            child={
              <div>
                <h1 className="bold_primary">
                  Hot 🔥 <br /> deals for you
                </h1>
                <p className="text-secondary">
                  online shopping for retails and direct customers
                </p>
              </div>
            }
          />

          <Bottom_up
          delay={0.5}
            child={
              <div>
                <i className="bi bi-cash-coin fs-2 fw-bold text-secondary"></i>
                <h5 className="fw-bold my-3 fs-6">1.5% cashback</h5>
                <p className="text-secondary">
                  online shopping for retail sales directed to customers
                </p>
              </div>
            }
            class={"deal_item col-sm-6 col-md-3"}
          />

          <Bottom_up
          delay={0.7}
            child={
              <div>
                <i className="bi fw-bold bi-cash-coin fs-2 text-secondary"></i>
                <h5 className="fw-bold my-3 fs-6">30 day term</h5>
                <p className="text-secondary">
                  online shopping for retail sales directed to customers
                </p>
              </div>
            }
            class={"deal_item col-sm-6 col-md-3"}
          />

          <Bottom_up
          delay={0.9}
            child={
              <div>
                <i className="bi bi-cash-coin fw-bold fs-2 text-secondary"></i>
                <h5 className="fw-bold my-3 fs-6">Save money</h5>
                <p className="text-secondary">
                  online shopping for retail sales directed to customers
                </p>
              </div>
            }
            class={"deal_item col-sm-6 col-md-3"}
          />
        </div>
      </Container>
    </div>
  );
}

export default HotDeals;
