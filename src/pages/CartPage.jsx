import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Cart = ({ cartItems = [], onRemoveFromCart, onIncrement, onDecrement }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Row className="g-4 mb-5">
            {cartItems.map((item, index) => (
              <Col xs={12} key={index}>
                <Card className="shadow-sm p-3">
                  <Row className="align-items-center">
                    <Col xs={12} md={3}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="img-fluid"
                        style={{ height: "120px", objectFit: "contain" }}
                      />
                    </Col>
                    <Col xs={12} md={9}>
                      <h5>{item.name}</h5>
                      <p className="text-muted">{item.description}</p>
                      <p>Price: ₹ {item.price.toFixed(2)}</p>
                      <div className="d-flex align-items-center mb-2">
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          onClick={() => onDecrement(item)}
                        >
                          −
                        </Button>
                        <span className="mx-3">{item.quantity || 1}</span>
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          onClick={() => onIncrement(item)}
                        >
                          +
                        </Button>
                      </div>
                      <p>
                        <strong>Subtotal:</strong> ₹{" "}
                        {(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onRemoveFromCart(item)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          <h4 className="text-end">Total: ₹ {total.toFixed(2)}</h4>
          <div className="text-end">
            <Button className="border-0 bg-dark"  >
              Place Order
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
