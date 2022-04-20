import Row from "./Row";

export default function DrawingPanel(props) {
  const { panelWidth, panelHeight, selectedColor } = props;
  let rows = [];
  for (let i = 0; i < panelHeight; i++) {
    rows.push(
      <Row key={i} panelWidth={panelWidth} selectedColor={selectedColor} />
    );
  }
  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  );
}
