import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const DropDownMenuOne = (props) => {
  const { mNumbers, sMnumbers } = props;
  const [menuItems, setMenuItems] = useState([]);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const menuItemArr = [];

    for (let i = 0; i < mNumbers; i++) {
      menuItemArr.push(`menu item ${i + 1}`);
    }
    setMenuItems(menuItemArr);
  }, [mNumbers]);

  console.log(isActive);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Wrapper>
      <ButtonMain onClick={toggleClass}>MENU</ButtonMain>
      <ListWrapper style={isActive ? { opacity: 1 } : { opacity: 0 }}>
        {menuItems.map((Item) => {
          return <MenuList key={uuidv4()}>{Item}</MenuList>;
        })}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  margin: auto;
  width: 200px;
  height: 50px;
  margin-top: 100px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  font-weight: 300;
`;

const ButtonMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #28d86b;
  color: white;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: #24bf60;
  }
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f1f1f2;
  border-bottom: 1px solid #dcddde;
  &:hover {
    background-color: #e6e7e8;
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;

  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  font-weight: 300;
  top: 50px;
`;
export default DropDownMenuOne;
