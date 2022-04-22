import { useDispatch } from "react-redux";
import ColorsInPalette from "../data/ColorsInPalette";
import { selectedColorAction } from "../store/selectedColorAction";

const Palette = () => {
  const dispatch = useDispatch();
  const handlerSelectedColor = (color) => {
    dispatch(selectedColorAction(color));
    console.log(color);
  };
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
