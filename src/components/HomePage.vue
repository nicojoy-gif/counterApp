<template>
  <div
    class="grey text-light container-fluid bg-dark box d-flex flex-column text-center align-items-center justify-content-center"
  >
    <transition name="slide" appear>
      <h1 class="grey fs-1 py-3">A Simple Counter App</h1>
    </transition>
    <transition name="slide" appear>
      <p class="grey fs-5">
        A simple tool for counting things and keeping track of numbers.
      </p>
    </transition>
    <transition name="slide" appear>
      <router-link to="/counter">
        <button class="mt-3 btn btn-light">Get Started</button>
      </router-link>
    </transition>
  </div>
</template>

<script setup></script>

<style scoped>
.grey {
  color: rgb(211, 211, 211);
}
.box {
  height: 100vh;
  width: 100%;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 2s ease-in forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 2s ease-out forwards;
  opacity: 0;
  transition: opacity 1s;
}
@keyframes slide-in {
  from {
    transform: translateX(90%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(90%);
  }
}
</style>