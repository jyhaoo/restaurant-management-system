import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 300px;
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

const MenuItem = ({ props }) => {
  console.log(props);
  return (
    <Container>
      <Img src={require("../../images/ColdNoodles.jpeg")} />
      <Name>{props.name}</Name>
      <Price>{props.price}</Price>
    </Container>
  );
};

export default MenuItem;
