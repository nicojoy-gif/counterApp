<template>
  <div
    class="position-relative container-fluid box d-flex flex-column align-items-center justify-content-start"
    :style="{ 'background-color': backgroundColor }"
  >
    <nav
      class="d-grid gap-4 d-flex mt-3"
      :style="{ 'background-color': backgroundColor }"
    >
      <button class="border border-0 bg-transparent" @click="showed">
        <i class="fa-solid fa-circle-info grey hover"></i>
      </button>
      <button @click="showSet" class="border border-0 bg-transparent">
        <i class="fa-solid fa-gear grey hover"></i>
      </button>
      <button @click="setResetVal" class="border border-0 bg-transparent">
        <i class="fa-solid fa-rotate-right grey hover"></i>
      </button>
    </nav>

    <div
      :style="{ 'background-color': backgroundColor }"
      v-if="showMsgs == true"
      class="z-2 fw-semibold text-light position-absolute top-0 start-0 container-fluid box grey d-flex flex-column align-items-center text-center justify-content-center opacity-85"
    >
      <h2 class="fw-1 pb-4">Simple Counter</h2>
      <p class="fs-6">
        A simple tool for counting things and keeping track of numbers.
      </p>
      <p class="fs-6">&#169; Orji Onyinyechi</p>
      <button
        @click="notShow"
        class="border border-0 bg-transparent grey hover"
      >
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </div>

    <div
      :style="{ 'background-color': backgroundColor }"
      v-if="showReset == true"
      class="z-2 fw-semibold text-light position-absolute top-0 start-0 container-fluid box grey d-flex flex-column align-items-center justify-content-center opacity-85"
    >
      <h2 class="fw-1 py-4">Reset Counter?</h2>
      <h3 @click="reset" class="fs-5 py-3 hover">Yes</h3>
      <h3 @click="noReset" class="fs-5 py-3 hover">Cancel</h3>
    </div>

    <section
      :style="{ 'background-color': backgroundColor }"
      v-if="showSetting == true"
      class="z-2 fw-bold text-center text-light position-absolute top-0 start-0 container-fluid bg-dark box grey d-flex flex-column align-items-center fs-5 justify-content-center opacity-75"
    >
      <h1 class="fs-4 py-4">Settings</h1>
      <div class="bg-dark border-secondary card mb-3" style="width: 18rem">
        <div class="card-body">
          <p class="d-flex justify-content-center align-items-center">
            Set count =
            <input
              v-model="Val"
              type="number"
              class="input fw-2 fs-4 rounded-2"
            />
          </p>
        </div>
      </div>
      <div class="bg-dark border-secondary card mb-3" style="width: 18rem">
        <div class="card-body d-flex flex-wrap">
          <div v-for="color in colors" :key="color" class="mx-1 d-flex color">
            <div
              class="color border-0 rounded-3 hoverCol"
              :style="{ 'background-color': color }"
              @click="backgroundColor = color"
            ></div>
          </div>
        </div>
      </div>

      <button @click="noShow" class="border border-0 bg-transparent grey hover">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </section>
    <Counter :style="{ 'background-color': backgroundColor }" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Counter from "./CounterPage.vue";
import "../assets/nav.css";

const store = useStore();
const showMsgs = ref(false);
const colors = ref([
  "#212529",
  "#181D31",
  "#3A1078",
  "#A10035",
  "gray",
  "purple",
  "green",
  "#EA047E",
]);
const showSetting = ref(false);
const backgroundColor = ref("#212529");
const showReset = ref(false);
function noReset() {
  showReset.value = false;
}
function showed() {
  showMsgs.value = !showMsgs.value;
}
function notShow() {
  showMsgs.value = false;
}
function showSet() {
  showSetting.value = !showSetting.value;
}
function noShow() {
  showSetting.value = false;
}
function setResetVal() {
  showReset.value = !showReset.value;
}
function reset() {
  store.dispatch("reset");
  showReset.value = false;
}
const Val = computed({
  get() {
    return store.getters.getCount;
  },
  set(val) {
    return store.dispatch("setValue", val);
  },
});
</script>