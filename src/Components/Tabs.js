import React, { useState } from "react";
import styled from "styled-components";

// style for tabs
const Tab = styled.button`
  font-size: 14px;
  cursor: pointer;
  background: none;
  border: 0;
  outline: 0;
  color: white;
  margin-left: 10px;
  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid white;
    color: white;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  color: white;
`;

// tabs list
const types = ["TAB ONE", "TAB TWO", "TAB THREE"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
}
<TabGroup />;

export default TabGroup;
