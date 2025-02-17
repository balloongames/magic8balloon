<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
const store = useStore()

const isAnimating = ref<boolean>(false)

const startAnimation = (): void => {
  if (isAnimating.value) return // Prevent re-clicking while animating

  isAnimating.value = true

  setTimeout(() => {
    isAnimating.value = false
    store.setState('response')
    store.getNewResponse()
  }, 1800)
}
</script>

<template>
  <div class="wrapper" :class="store.state === 'response' && 'invisible'">
    <div class="balloon-container" @click="startAnimation">
      <h1 class="text" :class="{ fadeOut: isAnimating }">Consult Balloon</h1>
      <svg
        class="balloon"
        :class="{ animate: isAnimating }"
        viewBox="0 0 200 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 20C44.7715 20 0 64.7715 0 120C0 175.228 44.7715 220 100 220C155.228 220 200 175.228 200 120C200 64.7715 155.228 20 100 20Z"
          fill="#FFC0CB"
        />
        <path
          d="M100 220C100 300 100 350 100 450"
          stroke="#888888"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply relative overflow-hidden h-[500px] w-[200px];
}

.balloon-container {
  @apply absolute bottom-0 left-0 h-[300px] w-[200px] cursor-pointer;
}

.balloon {
  @apply relative bottom-0 left-0 w-[200px] h-[250px];
}

.text {
  @apply text-white text-center text-3xl;
}

.animate {
  animation: float 2s ease-in-out;
}

.fadeOut {
  animation: fadeOutText 2s ease-in-out;
}

@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-500px);
    opacity: 0;
  }
}

@keyframes fadeOutText {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
