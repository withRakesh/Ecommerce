import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Cart = ({ cartItems = [], onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table  hover responsive className="mb-5">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                <td><img src={item.img} alt={item.name} style={{height:'80px', width:'120px'}} /></td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td><button className="bg-white border-1"   onClick={() => onRemoveFromCart(item)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total: ₹ {total}</h4>
          <Button className="border-0" style={{backgroundColor:'orange'}}>Place Order</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
