import { useState } from "react";
import { Data } from "../data/dummydata";
import styled from "styled-components";
import MenuItem from "../components/MenuItem/MenuItem";
import FoodModal from "../components/Modal/Modal";

const MenuName = styled.div`
  font-size: 45px;
  text-align: center;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  // z-index: 0;
  align-items: center;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Menu = () => {
  const [openModal, setOpenModal] = useState({ state: false, dish: null });
  return (
    <>
      {Data.map((dish) => (
        <>
          <MenuName id={dish.id}>{dish.name}</MenuName>
          <MenuItemContainer>
            <MenuItemWrapper>
              {dish.dishes.map((dish) => (
                <MenuItem
                  dish={dish}
                  key={dish.name}
                  setOpenModal={setOpenModal}
                />
              ))}
            </MenuItemWrapper>
          </MenuItemContainer>
        </>
      ))}
      {openModal.state && (
        <FoodModal
          show={openModal.state}
          openModal={openModal}
          onHide={() => setOpenModal({ state: false, dish: null })}
        />
      )}
    </>
  );
};

export default Menu;
