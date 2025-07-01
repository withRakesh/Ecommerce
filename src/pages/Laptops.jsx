import React from "react";
import { laptopsData } from "../components/LaptopsData/laptopsData";
import { Container, Row, Col, Card } from "react-bootstrap";
import {toast} from "react-toastify"

const Laptops = ({ onAddToCart }) => {

    const notify = ()=>{
        toast.success('Added Successfully')
    }
 

  return (
    <div>
      <Container className="py-5">
        <h4
          className="fw-bold py-md-5 text-center mb-3"
          style={{ fontFamily: "eagle lake" }}
        >
          Offer Sale
        </h4>
        <Row className="g-4">
          {laptopsData.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  className="img-fluid custom-img"
                  src={item.img}
                  alt={item.name}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-white d-flex justify-content-between align-items-center">
                  <Card.Text className="fw-bold">₹ {item.price}</Card.Text>
                  <button
                    className="border-0 p-1"
                    onClick={() => {
                      onAddToCart(item);
                      notify();
                    }}
                  >
                    Add to cart
                  </button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Laptops;
