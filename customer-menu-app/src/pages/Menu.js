import styled from "styled-components";
import MenuItem from "../components/MenuItem/MenuItem";

const MenuName = styled.div`
  font-size: 45px;
  text-align: center;
`;

const Menu = () => {
  return (
    <>
      <MenuName id="hotdishes">Hot Dishes</MenuName>
      <MenuItem />
    </>
  );
};

export default Menu;
