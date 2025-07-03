import React from "react";
import { Container, Col, Row } from "react-bootstrap";
 import home from '../components/Assets/home.webp'
import HomeProductList from "../components/HomeProductList/HomeProductList";
 
const Home = ({onAddToCart}) => {
  return (
    <div>
      <Container className="py-5">
        <Row className="g-4 text-center text-md-start align-items-center">
          <Col md={6}>
            <h1 className="fw-bold text-uppercase mb-3" style={{fontFamily:'eagle lake'}}>Shop For Quality Electronics</h1>
            <h3 className="text-muted mb-3">
              Top brands, exclusive offers, and fast delivery
            </h3>
            <button className="bg-white  border-1 p-1 pe-2">Shop Now</button>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={home} loading="lazy" alt="home" />
          </Col>
        </Row>
      </Container>
      <HomeProductList onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
