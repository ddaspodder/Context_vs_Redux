import React, { useContext } from "react";
import { Store } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const {
    counter,
    //  showCounter,
    increment,
    decrement,
    increase,
    toggle,
  } = useContext(Store);

  // const show = showCounter;
  const show = true;
  const incrementHandler = increment;

  const increaseHandler = () => {
    increase(10);
  };

  const decrementHandler = decrement;

  const toggleCounterHandler = toggle;

  console.log("component updated");
  //component gets updated each time toggle is clicked although the component dosent need to update since it is not consuming showCounter
  return (
    <main className={classes.counter}>
      <h1>Context Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
