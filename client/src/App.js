import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import GlobalStyles from "./components/GlobalStyles";
import DropDownMenuOne from "./components/DropDownMenuOne";
import SubmitForm from "./components/SubmitForm";

const App = () => {
  const [mNumbers, setmNumbers] = useState(0);
  const [sMnumbers, setSmNumbers] = useState(0);
  // console.log(mNumbers, sMnumbers);
  return (
    <Wrapper>
      <GlobalStyles />
      <SubmitForm
        mNumbers={mNumbers}
        setmNumbers={setmNumbers}
        sMnumbers={sMnumbers}
        setSmNumbers={setSmNumbers}
      />
      <DropDownMenuOne mNumbers={mNumbers} sMnumbers={sMnumbers} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
