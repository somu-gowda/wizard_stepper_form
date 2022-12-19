import React from "react";
import logo from "../Assets/tigeen_computing_logo.png";
import { List } from "react-bootstrap-icons";
import ActiveTab from "../Components/Tabs";
import { Drawer, Button } from "@mui/material";

const NavBar = (props) => {
  const {
    logoPosition,
    bgColor,
    leftDrawer,
    rightDrawer,
    headerNavigation,
  } = props;
  let postion = logoPosition;
  if (postion === undefined) {
    postion = "left";
  }

  // initional state of direction
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      className={`row ${bgColor === "red" ? "bg_color_red" : "bg_color_blue"}`}
    >
      <div>
        <div className="nav_bar">
          <div style={{ padding: "8px" }}>
            {leftDrawer.checked === true ? DrawerMenu("left") : ""}
          </div>
          <div style={{ width: "100%" }}>
            {postion === "disabled" ? (
              ""
            ) : (
              <div className={postion}>
                <img src={logo} alt="tigeen log" width="200px" height="40px" />
              </div>
            )}
          </div>
          <div style={{ padding: "8px" }}>
            {rightDrawer.checked === true ? (
              DrawerMenu("right")
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div>{headerNavigation.checked === true ? <ActiveTab /> : ""}</div>
    </div>
  );
};

export default NavBar;
