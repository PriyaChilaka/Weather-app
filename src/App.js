
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by yournamehere
      </footer>
    </div>
  );
}

export default App;
