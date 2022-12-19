import React from "react";
import { List } from "react-bootstrap-icons";
import ActiveTab from "../Components/FooterTabs";
import {
  Drawer,
  Button,
} from "@mui/material";

// footer 
const Footers = (props) => {
  const { leftDrawer, rightDrawer, footerNavigation } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // toggledrawer function
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // drawer
  const DrawerMenu = (direction) => {
    return (
      <React.Fragment key={direction}>
        <Button onClick={toggleDrawer(direction, true)}>
          <List color="white" size={25} />
        </Button>
        <Drawer
          anchor={direction}
          open={state[direction]}
          onClose={toggleDrawer(direction, false)}
        >
          {direction} {"menu list"}
        </Drawer>
      </React.Fragment>
    );
  };
  
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "40px",
        backgroundColor: "grey",
      }}
    >
      <footer className="text-center text-lg-start">
        <div className="text-center" style={{ color: "white" }}>
          <div className="row justify-content-space-between">
            <div className="col" style={{ textAlign: "left" }}>
              {leftDrawer.checked === true ? DrawerMenu("left") : ""}
            </div>
            <div className="col">
              {footerNavigation.checked === true ? <ActiveTab /> : ""}
            </div>
            <div className="col" style={{ textAlign: "right" }}>
              {rightDrawer.checked === true ? DrawerMenu("right") : ""}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
