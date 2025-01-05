import React from "react";

const Counter = () => {
  const count = 0
  const formatCount = () => {
    return count === 0 ? "empty" : count
  }
  return (
    <>
      <h1>{formatCount()}</h1>
      <button>+</button>
    </>
  );
};

export default Counter;
