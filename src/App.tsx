import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Tests from "./Test";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <span>The counter value is fyyyn {counter}</span>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        increment
      </button>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Tests />} />
      </Routes>
    </div>
  );
}

export default App;
