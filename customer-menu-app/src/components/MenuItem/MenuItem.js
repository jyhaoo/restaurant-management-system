import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 300px;
  z-index: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 85%;
  border-radius: 25px;
`;

const Name = styled.div`
  font-size: 18px;
`;

const Price = styled.div`
  font-size: 15px;
`;

const MenuItem = ({ dish, setOpenModal }) => {
  return (
    <Container onClick={() => setOpenModal({ state: true, dish: dish })}>
      <Img src={require("../../images/ColdNoodles.jpeg")} />
      <Name>{dish.name}</Name>
      <Price>{dish.price}</Price>
    </Container>
  );
};

export default MenuItem;
