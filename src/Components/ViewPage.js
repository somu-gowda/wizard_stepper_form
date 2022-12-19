import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editStage } from '../Redux/rootSlice'
import { Form } from "react-bootstrap";
import {useForm} from 'react-hook-form'
import CustomizedSteppers from "./Stepper";

const ViewPage = (props) => {
  const {
    handleLogo,
    logoPosition,
    handleColor,
    bgColor,
    handleToggle,
    header,
    footer,
    drawer,
    leftDrawer,
    rightDrawer,
    headerNavigation,
    footerNavigation,
  } = props;

  
  // redux
  const dispatch = useDispatch();
  const edit = useSelector(state => state.edit)
  const { register, handleSubmit } = useForm({ defaultValues: { edit } })

  const onSubmit = (data) => {
    dispatch(editStage(data.edit))
  } 

  return (
    <div style={{ margin: "auto" }}>
      <div
        className="card bg-white mb-3 mt-1"
        style={{ maxWidth: "40rem auto", height: "37rem auto" }}
      >
        <div className="card-header bg-white p-2">
       <CustomizedSteppers />
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body" style={{ marginLeft: "35px" }}>
            <div className="m-2">
              <span>I want a Company Logo</span>
              <br />
              <div className="form-check form-check-inline mt-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="a"
                  id="id"
                  value="left"
                  checked={logoPosition === "left"}
                  onClick={(e) => handleLogo(e)}
                />
                <label className="form-check-label" for="inlineRadio1">
                  Left
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="a"
                  id="id"
                  value="right"
                  onClick={(e) => handleLogo(e)}
                />
                <label className="form-check-label" for="inlineRadio3">
                  Right
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="a"
                  id="id"
                  value="center"
                  onClick={(e) => handleLogo(e)}
                />
                <label className="form-check-label" for="inlineRadio2">
                  Center
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="a"
                  id="id"
                  value="disabled"
                  onClick={(e) => handleLogo(e)}
                />
                <label className="form-check-label" for="inlineRadio3">
                  disabled
                </label>
              </div>
              <br />
            </div>

            {/* preset color */}
            <div className="m-2">
              <span>Preset Color</span>
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="color"
                  id="id"
                  value="blue"
                  checked={bgColor === "blue"}
                  onClick={(e) => handleColor(e)}
                />
                <label className="form-check-label" for="inlineRadio1">
                  Blue(#1976d2)
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="color"
                  id="id"
                  value="red"
                  onClick={(e) => handleColor(e)}
                />
                <label className="form-check-label" for="inlineRadio2">
                  Red(#ff0000)
                </label>
              </div>
              <p>
                Preset Apply only: Header Background, Button, Radio Button &
                Switch
              </p>
            </div>

            {/* toggle switch */}
            <div className="m-2">
              <div className="form-check form-switch ">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="header"
                  value="header"
                  checked={header && header.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="header">
                  I want a Header
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="footer"
                  value="footer"
                  checked={footer && footer.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="footer">
                  I want a Footer
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="drawer"
                  value="drawer"
                  checked={drawer && drawer.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="drawer">
                  I want a Drawer Overlay Mode(requires Header or Footer)
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="leftSide"
                  value="leftSide"
                  checked={leftDrawer && leftDrawer.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="leftSide">
                  I want left-side Drawer
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  className="form-check-input"
                  type="checkbox"
                  id="righSide"
                  value="righSide"
                  checked={rightDrawer && rightDrawer.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="righSide">
                  I want right-side Drawer
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="headerNavi"
                  value="headerNavi"
                  checked={headerNavigation && headerNavigation.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="headerNavi">
                  I want navigation tabs(requires Header)
                </label>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  style={{
                    backgroundColor: bgColor === "red" ? "#ff0000" : "#1976d2",
                  }}
                  type="checkbox"
                  id="footerNavi"
                  value="footerNavi"
                  checked={footerNavigation && footerNavigation.checked}
                  onChange={(e) => handleToggle(e)}
                />
                <label className="form-check-label" for="footerNavi">
                  I want a Bottom Menu(requires Footer)
                </label>
              </div>
            </div>
          </div>
        </Form>
        <div className="card-footer bg-white">
          <button
            type="submit"
            className={`btn ${
              bgColor === "red"
                ? "bg_color_red textColor"
                : "bg_color_blue textColor"
            } btn-sm`}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
