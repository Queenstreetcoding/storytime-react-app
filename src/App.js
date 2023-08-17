import './App.css';
import Story from "./Story.js";
import Ingredients from "./Ingredients.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Let's create a story together</h1>
        <Ingredients />
        <Story />
      </header>
    </div>
  );
}

export default App;
