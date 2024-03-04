import styled from "styled-components";
import RestaurantName from "../../images/RestaurantName.png";

const HeaderContainer = styled.div`
  position: relative;
  width: 1332px;
  height: 70px;
  justify-content: center;
`;
const Img = styled.img`
  position: relative;
  width: 80px;
  height: 50px;
  left: 50%;
`;

const Name = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  left: 50%;
`;

const Line = styled.hr`
  border-top: 1px solid #000000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={RestaurantName} alt="restaurant-name-image" />
      <Name>Mian Tiao</Name>
      <Line />
    </HeaderContainer>
  );
};

export default Header;
