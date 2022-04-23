import { useState } from "react";
import { useSelector } from "react-redux";

export default function Pixel(props) {
  const { index, pixelColor, setCurrentCanvas, Canvas10x10, Canvas500x500 } =
    props;
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

  const handlerHoverOverPixel = () => {
    setCurrentColor(selectedColor);
    console.log(pixelColor);
  };

  const handlerApplyColorToPixel = () => {
    Canvas10x10[index] = selectedColor;
    const newCanvas = [...Canvas10x10];
    setCurrentCanvas(newCanvas);
    console.log(index, Canvas10x10);
  };

  // const handlerApplyColorToPixel = () => {
  //   // Canvas500x500[index] = selectedColor;
  //   const newCanvas = Canvas500x500.splice(index, 1, selectedColor);
  //   setCurrentCanvas(newCanvas);
  // };
  return (
    <div
      onClick={handlerApplyColorToPixel}
      style={{ backgroundColor: currentColor }}
      className="color-pixel"
      // onMouseOver={(this.style.color = "#0F0")}
      onMouseEnter={
        handlerHoverOverPixel
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
