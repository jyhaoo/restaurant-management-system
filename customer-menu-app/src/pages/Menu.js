import { useState } from "react";
import styled from "styled-components";
import MenuItem from "../components/MenuItem/MenuItem";

const MenuName = styled.div`
  font-size: 45px;
  text-align: center;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const DummyData = {
  name: "Oyster Dynamite",
  price: 14.99,
};

const Data = [
  {
    name: "Appetizers",
    id: "appitizers",
    dishes: [
      {
        name: "Cucumber Salad",
        price: 14.99,
      },
    ],
  },
];

const Menu = () => {
  const [openModal, setOpenModal] = useState({ state: false, menuItem: null });
  return (
    <>
      <MenuName id="hotdishes">Hot Dishes</MenuName>
      <MenuItemContainer>
        <MenuItemWrapper>
          <MenuItem
            props={DummyData}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />{" "}
        </MenuItemWrapper>
      </MenuItemContainer>
    </>
  );
};

export default Menu;
