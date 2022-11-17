import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [ans, setAns] = useState(0);
  const [state, setState] = useState({
    num1: 0,
    num2: 0
  });

  function handleOnchange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  useEffect(() => {
    setAns((state.num1 + state.num2) / 2);
  }, [state.num1, state.num2]);

  return (
    <div className="App">
      <div>
        <input
          value={state.num1}
          name="num1"
          type="number"
          onChange={(e) => handleOnchange(e)}
        />
      </div>
      <br />
      <div>
        <input
          value={state.num2}
          name="num2"
          type="number"
          onChange={(e) => handleOnchange(e)}
        />
      </div>
      <div>
        <span>Avearage: {ans}</span>
      </div>
    </div>
  );
}
