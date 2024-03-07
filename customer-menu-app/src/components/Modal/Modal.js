import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Image = styled.img`
  width: 550px;
  height: 400px;
`;

function FoodModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.openModal.dish.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <Image src={require("../../images/ColdNoodles.jpeg")} />
      </Modal.Body>
      <Modal.Footer>
        <Button>Add to cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FoodModal;
