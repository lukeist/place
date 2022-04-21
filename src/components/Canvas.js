// import Canvas1000x1000 from "../data/Canvas1000x1000";
import { useState } from "react";
import { useSelector } from "react-redux";
import Canvas100x100 from "../data/Canvas100x100";
import Canvas500x500 from "../data/Canvas500x500";

const Canvas = (props) => {
  const selectedColor = useSelector((state) => state.ultilities.selectedColor);
  // const [hoveredColor, setHoveredColor] = useState(selectedColor);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const handlerHoveredColor = () => {
    setCurrentColor(selectedColor);
  };
  // const resetColor = () => {
  //   setCurrentColor;
  // };
  //   const test1m = new Array(1000000);
  const c100x100length = Canvas100x100.length;
  const c500x500length = Canvas500x500.length;
  // const canvas1000x1000length = Canvas1000x1000.length;

  return (
    <div id="canvas">
      {Canvas500x500.map((color) => (
        <div
          onClick={() => console.log(currentColor)}
          style={{ backgroundColor: currentColor }}
          // className="color-pixel"
          // onMouseOver={(this.style.color = "#0F0")}
          onMouseEnter={handlerHoveredColor}
          onMouseLeave={() => setCurrentColor(color)}
        ></div>
      ))}
    </div>

    // <div onClick={() => console.log(canvas1000x1000length)} id="canvas">
    //   {Canvas1000x1000?.map((x) => (
    //     <div>a</div>
    //   ))}
    // </div>
  );
};

export default Canvas;
