export enum CounterType {
  Increment,
  Decrement,
}

const actions = {
  increment() {
    return {type: CounterType.Increment}
  },
  decrement() {
    return {type: CounterType.Decrement}
  }
};

export default actions;
