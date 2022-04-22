// import Canvas1000x1000 from "../data/Canvas1000x1000";
import { useState } from "react";
import { useSelector } from "react-redux";
import Canvas100x100 from "../data/Canvas100x100";
import Canvas10x10 from "../data/Canvas10x10";
import Canvas500x500 from "../data/Canvas500x500";
import Pixel from "./Pixel";

const Canvas = (props) => {
  // const selectedColor = useSelector((state) => state.ultilities.selectedColor);
  // // const [hoveredColor, setHoveredColor] = useState(selectedColor);
  // const [currentColor, setCurrentColor] = useState("#ffffff");
  // const handlerHoveredColor = () => {
  //   setCurrentColor(selectedColor);
  //   console.log(selectedColor);
  // };
  // const resetColor = () => {
  //   setCurrentColor;
  // };
  //   const test1m = new Array(1000000);
  const c100x100length = Canvas100x100.length;
  const c500x500length = Canvas500x500.length;
  const [currentCanvas, setCurrentCanvas] = useState(Canvas500x500);

  return (
    // <div id="canvas">
    //   {canvas100.map((pixelColor) => (
    //     <div
    //       onClick={() => console.log(currentColor)}
    //       style={{ backgroundColor: selectedColor }}
    //       className="color-pixel"
    //       // onMouseOver={(this.style.color = "#0F0")}
    //       onMouseEnter={
    //         handlerHoveredColor
    //         // () => console.log(pixelColor)
    //       }
    //       // onMouseLeave={() => setCurrentColor(color)}
    //     ></div>
    //   ))}
    // </div>

    // <div onClick={() => console.log(canvas1000x1000length)} id="canvas">
    //   {Canvas1000x1000?.map((x) => (
    //     <div>a</div>
    //   ))}
    // </div>

    <div id="canvas">
      {currentCanvas.map((pixelColor, index) => (
        <Pixel
          setCurrentCanvas={setCurrentCanvas}
          Canvas500x500={Canvas500x500}
          pixelColor={pixelColor}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default Canvas;
