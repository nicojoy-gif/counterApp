import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      countVal: 0,
    };
  },

  getters: {
    getCount(state) {
      return state.count;
    },
    getCounts(state) {
      return state.countVal;
    },
  },
  mutations: {
    increment(state, payload) {
      state.count = state.count + payload;
    },
    decrement(state, payload) {
      state.count = state.count - payload;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, Val) {
      state.count = Val;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
    reset(context) {
      context.commit("reset");
    },
    setValue(context, payload) {
      context.commit("setValue", payload);
    },
  },
});

export default store;
