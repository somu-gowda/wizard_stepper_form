import "./Sass.scss";

// components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ViewPage from "./Components/ViewPage";
import { useState } from "react";

function App() {
  const [logoPosition, setLogoPosition] = useState("left");
  const [bgColor, setBgColor] = useState("blue");
  const [header, setHeader] = useState({ checked: true });
  const [footer, setFooter] = useState({ checked: true });
  const [drawer, setDrawer] = useState({ checked: true });
  const [leftDrawer, setLeftDrawer] = useState({ checked: true });
  const [rightDrawer, setRightDrawer] = useState({ checked: true });
  const [headerNavigation, setHeaderNavigation] = useState({ checked: true });
  const [footerNavigation, setFooterNavigation] = useState({ checked: true });

  // handle logo position
  const handleLogo = (e) => {
    setLogoPosition(e && e.target.value);
  };

  // handle bg color
  const handleColor = (e) => {
    setBgColor(e && e.target.value);
  };
  // handle toggle button
  const handleToggle = (e) => {
    let elementId = e && e.target.id;
    let checkValue = e && e.target.checked;
    let toggleValue = e && e.target.value;
    switch (elementId) {
      case "header":
        setHeader({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "footer":
        setFooter({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "drawer":
        setDrawer({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "leftSide":
        setLeftDrawer({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "righSide":
        setRightDrawer({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "headerNavi":
        setHeaderNavigation({
          checked: checkValue,
          value: toggleValue,
        });
        break;
      case "footerNavi":
        setFooterNavigation({
          checked: checkValue,
          value: toggleValue,
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {header.checked === true ? (
        <div className="row">
          <div>
            <NavBar
              handleColor={handleColor}
              logoPosition={logoPosition}
              bgColor={bgColor}
              leftDrawer={leftDrawer}
              rightDrawer={rightDrawer}
              headerNavigation={headerNavigation}
              drawer={drawer}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="row">
        <div className="d-flex">
          <ViewPage
            handleLogo={handleLogo}
            logoPosition={logoPosition}
            handleColor={handleColor}
            bgColor={bgColor}
            handleToggle={handleToggle}
            header={header}
            footer={footer}
            drawer={drawer}
            leftDrawer={leftDrawer}
            rightDrawer={rightDrawer}
            headerNavigation={headerNavigation}
            footerNavigation={footerNavigation}
          />
        </div>
      </div>
      {footer.checked === true ? (
        <div className="row">
          <div>
            <Footer
              leftDrawer={leftDrawer}
              rightDrawer={rightDrawer}
              footerNavigation={footerNavigation}
              drawer={drawer}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
