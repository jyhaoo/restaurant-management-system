import styled from "styled-components";

const Card = styled.div`
  width: 370px;
  height: 211px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.div`
  position: absolute;
  font-weight: 600;
  color: white;
  font-size: 50px;
  margin-top: 70px;
  margin-left: 25px;
`;

const FoodCard = (props) => {
  return (
    <Card>
      <Img src={require("../../images/ColdNoodles.jpeg")} alt="Food Image" />
      <Name>{props.name}</Name>
    </Card>
  );
};

export default FoodCard;
