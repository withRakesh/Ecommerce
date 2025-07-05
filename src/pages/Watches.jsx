import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { watchData } from "../components/watchesData/watchesData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Watches = ({ onAddToCart }) => {
  return (
    <div>
      <Container className="py-5">
              <h4
          className="title py-md-5  text-center mb-3"
          style={{
            fontFamily: "marcellus",
            letterSpacing:'2px',
            fontSize:'40px',
          }}
        >
       Best Sellers
        </h4>
        <Row className="g-4">
          {watchData.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  className="img-fluid custom-img"
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
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

export default Watches;
