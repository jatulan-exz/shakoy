import { useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return(
    <>
    <h1>AC GARAGE</h1>

    <div>
      <button onClick={() => setCount(count - 1)}> - </button>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}>  + </button>
    </div>
  </>
  );
}

export default App;