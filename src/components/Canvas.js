// import Canvas1000x1000 from "../data/Canvas1000x1000";
import Canvas100x100 from "../data/Canvas100x100";
import Canvas500x500 from "../data/Canvas500x500";

const Canvas = (props) => {
  const { panelWidth, panelHeight, selectedColor } = props;
  const testArr = [
    // "#fff",
  ];

  //   const test1m = new Array(1000000);
  const c100x100length = Canvas100x100.length;
  const c500x500length = Canvas500x500.length;
  // const canvas1000x1000length = Canvas1000x1000.length;

  return (
    <div onClick={() => console.log(c500x500length)} id="canvas">
      {Canvas500x500?.map((color) => (
        <div
          onClick={() => console.log(color)}
          style={{ backgroundColor: color }}
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
