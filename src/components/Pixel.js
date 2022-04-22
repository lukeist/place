import { useState } from "react";
import { useSelector } from "react-redux";

export default function Pixel(props) {
  const { pixelColor, canvas100 } = props;
  // const { selectedColor } = props;
  // const [pixelColor, setPixelColor] = useState("#fff");
  // const [oldColor, setOldColor] = useState(pixelColor);
  // const [canChangeColor, setCanChangeColor] = useState(true);

  // const applyColor = () => {
  //   setPixelColor(selectedColor);
  //   setCanChangeColor(false);
  // };

  // const changeColorOnHover = () => {
  //   setOldColor(pixelColor);
  //   setPixelColor(selectedColor);
  // };

  // const resetColor = () => {
  //   if (canChangeColor) {
  //     setPixelColor(oldColor);
  //   }
  //   setCanChangeColor(true);
  // };

  const selectedColor = useSelector((state) => state.ultilities.selectedColor);
  // const [hoveredColor, setHoveredColor] = useState(selectedColor);
  const [currentColor, setCurrentColor] = useState(pixelColor);
  const handlerHoveredColor = () => {
    setCurrentColor(selectedColor);
    console.log(selectedColor);
  };
  return (
    <div
      onClick={() => console.log(currentColor)}
      style={{ backgroundColor: currentColor }}
      className="color-pixel"
      // onMouseOver={(this.style.color = "#0F0")}
      onMouseEnter={
        handlerHoveredColor
        // () => console.log(pixelColor)
      }
      onMouseLeave={() => setCurrentColor(pixelColor)}
    ></div>

    // <div
    //   className="pixel"
    //   style={{ backgroundColor: pixelColor }}
    //   onClick={applyColor}
    //   onMouseEnter={changeColorOnHover}
    //   onMouseLeave={resetColor}
    // ></div>
  );
}
