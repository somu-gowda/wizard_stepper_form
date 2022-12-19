import React, { useState } from "react";
import styled from "styled-components";
import { Envelope, Alarm, Film } from "react-bootstrap-icons";

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
    border-top: 3px solid white;
    color: white;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  color: white;
`;

const types = ["MAILS", "ALARMS", "MOVIES"];

const FooterTabs = () => {
  const [active, setActive] = useState(types);
  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type === "MAILS" ? (
              <div >
                <Envelope />
                <span className="p-1">{type}</span>
              </div>
            ) : type === "ALARMS" ? (
                <div>
                <Alarm />
                <span className="p-1">{type}</span>
              </div>
            ) : type === "MOVIES" ? (
                <div>
                <Film />
                <span className="p-1">{type}</span>
              </div>
            ) : ""}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
};

export default FooterTabs;
