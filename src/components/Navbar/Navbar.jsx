import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = ({ cartItems }) => {
  return (
    <Navbar expand="md" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#" >
          <b>ElectroKart</b>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end ">
          <Nav className="text-center">
                <Link as={Link} to={'/login'}> 
               <Button   className="me-2 m-1 bg-light text-dark border-0">
             login
            </Button>
            </Link>
            <div className="text-center d-flex justify-content-center align-items-center gap-3">
              <Link
                to="/cart"
                className="text-decoration-none text-dark fw-bold"
              >
              <i className="fa-solid fa-cart-shopping mt-1 fs-4"></i>
 
              </Link>
             <span className="bg-danger text-white px-2 rounded ">
                {cartItems.length}
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
