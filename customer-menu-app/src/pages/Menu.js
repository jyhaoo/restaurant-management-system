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
        price: 7.99,
      },
      { name: "Soy Noodle Salad", price: 7.99 },
      { name: "Wood Ear Mushrooms", price: 8.99 },
      { name: "Sweet & Sour Pork Baby Back Ribs", price: 10.99 },
    ],
  },
  {
    name: "Xiao Long Bao",
    id: "xiaolongbao",
    dishes: [
      { name: "Kurobuta Pork Xiao Long Bao", price: 13.99 },
      { name: "Crab & Kurobuta Pork Xiao Long Bao", price: 13.99 },
      { name: "Chicken Xiao Long Bao", price: 13.49 },
    ],
  },
  {
    name: "Steamed Dumplings & Buns",
    id: "dumplings&buns",
    dishes: [
      { name: "Chicken Dumplings", price: 11.99 },
      { name: "Vegan Dumplings", price: 11.99 },
      { name: "Cod Dumplings", price: 11.99 },
      { name: "Shrimp & Kurobuta Pork Dumplings", price: 12.99 },
      { name: "Kimchi & Kurobuta Pork Dumplings", price: 12.99 },
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
          />
        </MenuItemWrapper>
      </MenuItemContainer>
    </>
  );
};

export default Menu;
