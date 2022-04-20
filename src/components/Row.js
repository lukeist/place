import Pixel from "./Pixel";

export default function Row(props) {
  const { panelWidth, selectedColor } = props;

  let pixels = [];
  for (let i = 0; i < panelWidth; i++) {
    pixels.push(<Pixel selectedColor={selectedColor} />);
  }
  return <div className="row">{pixels}</div>;
}
