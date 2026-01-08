import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// Functional component
export default function Counter() {
  const [count, setCount] = useState(0)
    //Function Increment
  const increment = () => {
    setCount(count + 1)
  };
  //Function Drcrement
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };
  //Reset function
  const reset = () => {
    setCount(0)
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <h2>Counter</h2>
      <div
        style={{ height: "120px", width: "120px", backgroundColor: "blue", color: "white", fontSize: "50px", borderRadius: "60px",
        margin: "10px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {count}

      </div>
      <button className="btn btn-success" onClick={increment} style={btnStyle}> + </button>
      <button className="btn btn-danger" onClick={decrement} style={btnStyle}> - </button>
      <button className="btn btn-warning" onClick={reset} style={btnStyle}> Reset </button>
    </div>
  );}
const btnStyle = { padding: "10px 20px", margin: "10px", fontSize: "16px", cursor: "pointer" };


