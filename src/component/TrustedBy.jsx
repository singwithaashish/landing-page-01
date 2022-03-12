import React from "react";
import { Container } from "react-bootstrap";

function TrustedBy() {
  return (
    <div className="w-100 p-5 my-5 bg-light">
      <Container>
        <h2 className="text-center mb-3 fs-3">Trusted by over 1000+ companies</h2>
        <div className="row text-center">
          <i className="bi bi-microsoft text-secondary col-sm-8 col-md-3"> Microsoft</i>
          <i className="bi bi-github text-secondary col-sm-8 col-md-3"> Github</i>
          <i className="bi bi-google text-secondary col-sm-8 col-md-3"> Google</i>
          <i className="bi bi-facebook text-secondary col-sm-8 col-md-3"> Facebook</i>
        </div>
      </Container>
    </div>
  );
}

export default TrustedBy;
