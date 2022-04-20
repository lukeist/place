import ColorsInPalette from "../data/ColorsInPalette";

const Palette = () => {
  return (
    <section id="palette">
      {ColorsInPalette.map((color) => (
        <span className="colorInPalette" style={{ backgroundColor: color }}>
          {/* aaaaaaaaa */}
        </span>
      ))}
    </section>
  );
};
export default Palette;
