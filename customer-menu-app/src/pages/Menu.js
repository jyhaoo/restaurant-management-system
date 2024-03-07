import { Data } from "../data/dummydata";
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

const Menu = () => {
  return (
    <div>
      {Data.map((dish) => (
        <>
          <MenuName id={dish.id}>{dish.name}</MenuName>
          <MenuItemContainer>
            <MenuItemWrapper>
              {dish.dishes.map((dish) => (
                <MenuItem props={dish} />
              ))}
            </MenuItemWrapper>
          </MenuItemContainer>
        </>
      ))}
    </div>
  );
};

export default Menu;
