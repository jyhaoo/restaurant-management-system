import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { RiBillLine } from "react-icons/ri";

const Nav = styled.div`
  background-color: #c7c6c1;
  width: 108px;
  height: 783px;
  justify-content: center;
  position: fixed;
`;

const ItemContainer = styled.div`
  width: 89px;
  height: 89px;
  margin-left: 25px;
  margin-right: 10px;
  margin-top: 65px;
`;

const SearchStyle = { width: "46px", height: "50px" };
const MenuStyle = { width: "45px", height: "50px" };
const ShoppingStyle = { width: "43px", height: "50px" };
const BillStyle = { width: "37px", height: "51px" };

const ItemName = styled.div`
  width: 89px;
  height: 34px;
  font-size: 17px;
  // margin-top: 5px;
  // margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Nav>
      <ItemContainer>
        <IoIosSearch style={SearchStyle} />
        <ItemName>Search</ItemName>
      </ItemContainer>
      <ItemContainer>
        <BiFoodMenu style={MenuStyle} />
        <ItemName>Menu</ItemName>
      </ItemContainer>
      <ItemContainer>
        <FiShoppingCart style={ShoppingStyle} />
        <ItemName>Cart</ItemName>
      </ItemContainer>
      <ItemContainer>
        <RiBillLine style={BillStyle} />
        <ItemName>Bill</ItemName>
      </ItemContainer>
    </Nav>
  );
};

export default Navbar;
