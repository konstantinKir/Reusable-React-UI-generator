import React, { useState } from "react";
import styled from "styled-components";

const SubmitForm = (props) => {
  const { mNumbers, setmNumbers, sMnumbers, setSmNumbers } = props;

  //   const HandleSubmit = (ev) => {
  //     ev.preventDefault();
  //   };

  const HandleChange = (event) => {
    setmNumbers(event.target.value);
  };

  const HandleChangeTwo = (event) => {
    setSmNumbers(event.target.value);
  };

  return (
    <FormWrapper>
      <FormSubm>
        <FormLabel htmlFor="fname">menu items:</FormLabel>
        <FormInput
          type="number"
          name="menu item"
          value={mNumbers}
          onChange={HandleChange}
          min="0"
          max="10"
          required
        />
        <FormLabel htmlFor="lname">submenu items:</FormLabel>
        <FormInput
          type="number"
          name="submenu item"
          value={sMnumbers}
          onChange={HandleChangeTwo}
          min="0"
          max="5"
          required
        />
      </FormSubm>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const FormLabel = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin-right: 10px;
`;

const FormSubm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FormInput = styled.input`
  margin-right: 10px;
`;

export default SubmitForm;
