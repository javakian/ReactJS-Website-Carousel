import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class TopBar extends React.Component {

  render() {
  return (
      
    <div>
     <Navbar fill="true" bg="light" expand="lg">
     <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://shopbigirlsclub.com/wp-content/uploads/2019/05/BGC_PLAINBIG-e1559852736160.png"
        height="30"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" defaultActiveKey="http://localhost:3000/">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Shop</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
   
</div>
  
    )}
  }

export default TopBar;
  
