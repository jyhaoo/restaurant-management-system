import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  margin-left: 5%;
  margin-top: 10px;
  border-radius: 25px;
  border: 2px solid black;
  display: flex;
`;

const InfoContainer = styled.div`
  margin: 10px;
  width: 50%;
  border-radius: 25px;
  display: box;
`;

const Name = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

const Info = styled.div`
  font-size: 18px;
  height: 40px;
`;

const Price = styled.div`
  margin-top: 30px;
  font-size: 26px;
`;

const Img = styled.img`
  width: 45%;
  height: 95%;
  margin: 10px;
`;

const MenuItem = () => {
  return (
    <Container>
      <InfoContainer>
        <Name>Oyster Dynamite</Name>
        <Info>Two 1/2 shells</Info>
        <Price>$14.99</Price>
      </InfoContainer>
      <Img src={require("../../images/ColdNoodles.jpeg")} />
    </Container>
  );
};

export default MenuItem;
