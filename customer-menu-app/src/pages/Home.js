import styled from "styled-components";
import FoodCard from "../components/Cards/FoodCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <CardContainer>
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
        <FoodCard name="Cold Noodles" />
      </CardContainer>
    </Container>
  );
};

export default Home;
