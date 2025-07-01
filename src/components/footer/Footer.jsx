import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 border">
      <Container>
        <Row className="mb-3">
          <Col xs={12} md={3} className="mb-3">
            <h5>Company</h5>
            <p>
              ElectroMart Pvt. Ltd.
              <br />
              Leading electronics at your doorstep.
            </p>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#">
                <i className="fab fa-whatsapp  text-light"></i>{" "}
              </a>
              <a href="#">
                <i className="fab fa-facebook  text-light"></i>{" "}
              </a>
              <a href="#">
                <i className="fab fa-instagram text-light"></i>{" "}
              </a>
              <a href="#">
                <i className="fab fa-twitter   text-light"></i>{" "}
              </a>
            </div>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h5>Legal</h5>
            <p>
              © {new Date().getFullYear()} ElectroMart. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
