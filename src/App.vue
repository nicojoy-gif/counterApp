<script setup>
import Navbar from './components/Navbar.vue';
import Home from './components/HomePage.vue';
component: {
  Navbar
  Home
}
</script>
<template>
   <router-view v-slot="{ component }" > 
<transition name="route" mode="out-in" appear>
<component :is="component" />
</transition>
  </router-view>
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateY(100px)
}
.route-enter-active,
.route-leave-active {
  transition: all .2s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateY(100px)
}
</style>