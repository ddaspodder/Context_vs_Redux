import React, { useState } from "react";

const initialState = {
  counter: 0,
  showCounter: true,
  increment: () => {},
  decrement: () => {},
  decrease: () => {},
  toggle: () => {},
};

export const Store = React.createContext(initialState);
const Provider = ({ children }) => {
  const [counter, setCounter] = useState(initialState.counter);
  const [showCounter, setShowCounter] = useState(initialState.showCounter);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const increase = (value) => {
    setCounter(counter + value);
  };
  const toggle = () => {
    setShowCounter(!showCounter);
  };

  return (
    <Store.Provider
      value={{ counter, showCounter, increment, decrement, increase, toggle }}
    >
      {children}
    </Store.Provider>
  );
};

export default Provider;
