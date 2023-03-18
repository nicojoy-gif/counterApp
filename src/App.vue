<script setup>
</script>
<template>
   <router-view v-slot="{ Component }" > 
<transition name="route" mode="out-in" appear>
<component :is="Component" />
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