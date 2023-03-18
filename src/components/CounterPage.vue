<template>
  <div
    class="text-light box container-fluid d-flex flex-column px-0 align-items-center justify-content-center"
  >
    <div
      class="d-flex container-fluid justify-content-between align-items-center"
    >
      <button
        @click="counter.decrement"
        type="button"
        class="btn btn-outline-secondary hover btn-lg rounded-circle text-light"
      >
        <i class="fa-solid fa-minus fw-bold"></i>
      </button>
      <h1 class="display-1 font">{{ Counter }}</h1>
      <button
        @click="counter.increment"
        type="button"
        class="btn hover btn-outline-secondary btn-lg rounded-circle text-light"
      >
        <i class="fa-solid fa-plus fw-bold"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import useCounter from "./composable/useCounter";
import { computed } from "vue";
const store = useStore();
const counter = useCounter();
const Counter = computed(() => {
  return store.getters.getCount;
});
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
}
.font {
  color: lightgray;
  font-size: 17em;
}
.hover:hover {
  background-color: inherit;
  border: 2px solid white;
  transition: 0.5s;
}
</style>