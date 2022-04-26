import { useDispatch } from "react-redux";
import ColorsInPalette from "../data/ColorsInPalette";
import { selectedColorAction } from "../store/selectedColorAction";

const Palette = () => {
  const dispatch = useDispatch();

  const handlerSelectedColor = (color) => {
    dispatch(selectedColorAction(color));
    console.log(color);
    // console.log(arrTest);
    // downloadTxtFile();
  };

  //////////////////////////////////////// get array to file gradient
  // const arrTest = [];
  // for (let i = 10000; i < 30000; i++) {
  //   arrTest.push("#f" + i);
  // }
  // const downloadTxtFile = () => {
  //   const element = document.createElement("a");
  //   const file = new Blob([arrTest.join(`','`)], {
  //     type: "text/plain",
  //   });
  //   element.href = URL.createObjectURL(file);
  //   element.download = "myFile.txt";
  //   document.body.appendChild(element);
  //   element.click();
  // };

  //////////////////////////////////////// get array to file random
  // function makeid(length) {
  //   var result = "";
  //   var characters = "ABCDEF0123456789";
  //   var charactersLength = characters.length;
  //   for (var i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // }

  // const arrTest = [];
  // for (let i = 10000; i < 30000; i++) {
  //   // arrTest.push("#" + makeid(6));
  //   const random = Math.floor(Math.random() * ColorsInPalette.length);

  //   arrTest.push(ColorsInPalette[random]);
  // }

  // const downloadTxtFile = () => {
  //   const element = document.createElement("a");
  //   const file = new Blob([arrTest.join(`','`)], {
  //     type: "text/plain",
  //   });
  //   element.href = URL.createObjectURL(file);
  //   element.download = "myFile.txt";
  //   document.body.appendChild(element);
  //   element.click();
  // };

  return (
    <section id="palette">
      {ColorsInPalette.map((color, index) => (
        <span
          className="colorInPalette"
          onClick={() => handlerSelectedColor(color)}
          style={{ backgroundColor: color }}
          key={index}
        ></span>
      ))}
    </section>
  );
};
export default Palette;
