import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

const Img = styled.img`
  width: 100px;
  height: 65px;
  margin-right: 10px;
`;

const CartStyle = { width: "40px", height: "40px" };

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Img
            src={require("../../images/RestaurantName.png")}
            alt="Restaurant Logo"
          />
          <Navbar.Brand href="#home">Mian Tsao</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Menu</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#bill">
              <IoCartOutline style={CartStyle} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
