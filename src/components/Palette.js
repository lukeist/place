import { useDispatch } from "react-redux";
import ColorsInPalette from "../data/ColorsInPalette";
import { setColorAction } from "../store/setColorAction";

const Palette = () => {
  const dispatch = useDispatch();
  const setColor = (color) => {
    dispatch(setColorAction(color));
    console.log(color);
  };
  return (
    <section id="palette">
      {ColorsInPalette.map((color) => (
        <span
          onClick={setColor(color)}
          className="colorInPalette"
          style={{ backgroundColor: color }}
        ></span>
      ))}
    </section>
  );
};
export default Palette;
