<script setup lang="ts">
import { useStore } from '@/stores/store'
import BalloonImage from './BalloonImage.vue';
const store = useStore()
</script>

<template>
  <section class="flex flex-col gap-4 justify-center items-center" :class="store.state === 'balloon' && 'hidden'">
    <h1 class="text-pink-500 text-3xl">{{ store.response }}</h1>
    <BalloonImage :response="store.response" class="w-[80vw]" />
    <button class="text-white border-2 border-white p-2 rounded-md" @click="store.setState('balloon')">Ask another
      question</button>
  </section>
</template>
