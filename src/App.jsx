import { useState } from "react";
import "./App.scss";
import Quiz from "./quiz/Quiz";

function App() {
  const [count, setCount] = useState(0);

  return <Quiz></Quiz>;
}

export default App;
