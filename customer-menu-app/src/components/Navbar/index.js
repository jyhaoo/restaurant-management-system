import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoCartOutline } from "react-icons/io5";

const CartStyle = { width: "40px", height: "40px" };

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand>面条</Navbar.Brand>
          <Navbar.Brand href="#home">Mian Tsao</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/bill">
              <IoCartOutline style={CartStyle} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
