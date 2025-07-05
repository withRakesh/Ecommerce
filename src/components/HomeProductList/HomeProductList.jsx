import { Container, Col, Row, Card } from "react-bootstrap";
import { productData } from "../HomeproductsData/HomeProducts";
import { brandLogos } from "../HomeproductsData/HomeProducts";

import "react-toastify/dist/ReactToastify.css";

const HomeProductList = ({ onAddToCart }) => {
  return (
    <div>
      <Container className="py-5">
        <h4
          className="title py-md-5  text-center mb-3"
          style={{
            fontFamily: "marcellus",
            letterSpacing:'2px',
            fontSize:'40px'
          }}
        >
          Latest Products
        </h4>
        <Row className="g-4">
          {productData.map((item, index) => (
            <Col key={index} xs={12} sm={6} lg={3} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  className="img-fluid custom-img"
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                />
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

      <Container className="bg-light mb-5">
        <h4 className="fw-bold py-md-5 text-center mb-3">Our Brands</h4>
        <Row className="py-4">
          {brandLogos.map((brand, i) => (
            <Col key={i} xs={4} md={2}  className="text-center g-4">
              <img
                src={brand.img}
                alt=""
                loading="lazy"
                className="brands"
                style={{ height: "80px", width: "80px" }}  
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeProductList;
