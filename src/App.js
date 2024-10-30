import logo from "./logo.svg";
import "./App.css";
import Counter from "./slice/counter";
import redux from "./redux.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={redux} alt="redux" style={{ width: "50%", height: "50%" }} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
