import { useStore } from "vuex";

function useCounter() {
  const store = useStore();

  function increment() {
    store.dispatch("increment", 1);
  }

  function decrement() {
    store.dispatch("decrement", 1);
  }
  function reset() {
    store.dispatch("reset");
  }
  function setValue(Val) {
    store.dispatch("setValue", Val);
  }

  return {
    increment,
    decrement,
    reset,
    setValue,
  };
}
export default useCounter;
