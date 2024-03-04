import styled from "styled-components";
import RestaurantName from "../../images/RestaurantName.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
`;
const Img = styled.img`
  position: relative;
  width: 80px;
  height: 50px;
  left: 50%;
`;

const Name = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  left: 50%;
`;

const Line = styled.hr`
  margin-top: 30px;
  border-top: 1px solid #000000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={RestaurantName} />
      <Name>Mian Tiao</Name>
      <Line />
    </HeaderContainer>
  );
};

export default Header;
