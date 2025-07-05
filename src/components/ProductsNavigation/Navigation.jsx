import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {

  const [menu, setMenu] = useState('/')

  return (
    <div>
      <Container>
        <div>
          <Navbar className="justify-content-center p-3">
            <Nav>
              <Nav.Link as={Link} to={"/"}  onClick={()=>setMenu('/')}>
                Home{menu==='/'?<hr className="m-1"/>:<></>}
              </Nav.Link>
            <Nav.Link as={Link} to={"/laptops"} onClick={()=>setMenu('/laptops')}>
                Laptops{menu==='/laptops'?<hr className="m-1"/>:<></>}
              </Nav.Link>
              <Nav.Link as={Link} to={"/watches"}   onClick={()=>setMenu('/watches')}>
                Watches{menu==='/watches'?<hr className="m-1"/>:<></>}
              </Nav.Link>
              <Nav.Link as={Link} to={"/headphones"}   onClick={()=>setMenu('/headphones')}>
                Headphones{menu==='/headphones'?<hr className="m-1 "/>:<></>}
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
