<script setup lang="ts">
import { useStore } from '@/stores/store'
import jelloon from '@/assets/jelloon.jpg'
const store = useStore()
</script>

<template>
  <section class="wrapper" :class="store.state === 'balloon' && 'invisible'">
    <h1 class="text">{{ store.response }}</h1>
    <img class="image" :src="jelloon" />
    <button class="button" @click="store.setState('balloon')">Ask another question</button>
  </section>
</template>

<style scoped>
.image {
  @apply w-[200px];
}
.button {
  @apply text-white border-2 border-white p-2 rounded-md;
}
.text {
  @apply text-pink-500 text-3xl p-2;
}
.wrapper {
  @apply absolute inset-0 flex flex-col justify-center items-center;
}
</style>
