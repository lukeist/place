import { useState } from "react";
import { GithubPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import Palette from "./Palette";
import { MapInteractionCSS } from "react-map-interaction";
import Test from "./Test";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(100);
  const [panelHeight, setPanelHeight] = useState(100);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setSelectedColor] = useState("#f44336");

  const iniDrawingPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  };
  const changeColor = (color) => {
    setSelectedColor(color.hex);
  };
  return (
    <div id="editor">
      {/* <h1>Pixel Editor</h1> */}
      {/* {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>} */}
      {/* {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => setPanelHeight(e.target.value)}
            />
            <span>Height</span>
          </div>
        </div>
      )} */}
      {/* 
      <button onClick={iniDrawingPanel} className="button">
        {buttonText}
      </button> */}
      {/* <GithubPicker
        id="reactColor"
        color={selectedColor}
        onChangeComplete={changeColor}
      /> */}
      <MapInteractionCSS>
        {/* <DrawingPanel
          panelWidth={panelWidth}
          panelHeight={panelHeight}
          selectedColor={selectedColor}
        /> */}
        <Test
          panelWidth={panelWidth}
          panelHeight={panelHeight}
          selectedColor={selectedColor}
        />
      </MapInteractionCSS>
    </div>
  );
}
