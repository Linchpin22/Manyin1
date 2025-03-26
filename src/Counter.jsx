import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function reset() {
    setCount(0);
  }
  function remove() {
    if (count == 0) {
      setCount(0);
    } else setCount(count - 1);
  }

  return (
    <div className="flex flex-col text-xl text-white items-center justify-center">
      <h1 className="text-white mb-5 text-3xl">Counter</h1>
      <h2>
        Count : <span className="text-red-500">{count}</span>
      </h2>
      <div className="flex mb-5 flex-row space-x-5">
        <button
          className={`px-4 py-2 rounded-lg mt-5 ${
            count == 0 ? "bg-gray-700" : "bg-red-500"
          }`}
          onClick={remove}
        >
          Remove
        </button>
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg mt-5"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-green-500 rounded-lg mt-5"
          onClick={add}
        >
          Add
        </button>
      </div>
     
    </div>
  );
};

export default Counter;
