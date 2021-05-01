import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Jumbotron() {
  return (
    <>
      <ReactBootStrap.Jumbotron className="p-5">
        <h1>India COVID-19 Vaccine Registration!</h1>
        <p>
        Register using your Mobile no. or Aadhaar no. or any other Identity docs.
        </p>
        <p>
          <ReactBootStrap.Button variant="outline-dark" href="https://selfregistration.cowin.gov.in/" size="lg">
            Register Now
          </ReactBootStrap.Button>
        </p>
      </ReactBootStrap.Jumbotron>
    </>
  );
}

export default Jumbotron;
