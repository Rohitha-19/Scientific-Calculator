import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const appendValue = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearAll = () => {
    setExpression("");
    setResult("");
  };

  const deleteLast = () => {
    setExpression(expression.slice(0, -1));
  };

  const calculate = () => {
    try {
      let exp = expression
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/√/g, "Math.sqrt")
        .replace(/\^/g, "**");

      setResult(eval(exp));
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Scientific Calculator</h2>

      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>

      <div className="buttons">
        <button onClick={clearAll}>AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => appendValue("(")}>(</button>
        <button onClick={() => appendValue(")")}>)</button>

        <button onClick={() => appendValue("sin(")}>sin</button>
        <button onClick={() => appendValue("cos(")}>cos</button>
        <button onClick={() => appendValue("tan(")}>tan</button>
        <button onClick={() => appendValue("√(")}>√</button>

        <button onClick={() => appendValue("log(")}>log</button>
        <button onClick={() => appendValue("ln(")}>ln</button>
        <button onClick={() => appendValue("^")}>^</button>
        <button onClick={() => appendValue("/")}>÷</button>

        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("*")}>×</button>

        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("-")}>−</button>

        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("+")}>+</button>

        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
