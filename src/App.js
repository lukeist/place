import "./styles/app.scss";
import Editor from "./components/Editor";
import Palette from "./components/Palette";
function App() {
  return (
    <div className="App">
      <Editor />
      <Palette />
    </div>
  );
}

export default App;
