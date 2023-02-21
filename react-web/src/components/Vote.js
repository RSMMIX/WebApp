import React, { useState } from "react";
import "./Vote.css"

// const Vote = () => {

  function Vote() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      if (count < 10) {
        setCount(count + 1);
      }     else{
        alert('Cannot Vote more')
    }
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
      else if (setCount == 1){
            setCount('MIN')
      }
      else{
          alert('Cannot Unvote')
      }
    };
  
    return (
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );
  }



export default Vote;