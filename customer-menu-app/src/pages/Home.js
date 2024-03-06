import styled from "styled-components";
import HomeFoodCard from "../components/Cards/HomeFoodCard";

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
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
        <HomeFoodCard name="Cold Noodles" />
      </CardContainer>
    </Container>
  );
};

export default Home;
