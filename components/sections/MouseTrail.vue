<template>
    <div class="mouse-trail" ref="trail"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const trail = ref(null);
  
  const updateTrail = (event) => {
    const trailElement = trail.value;
    if (trailElement) {
      trailElement.style.left = `${event.clientX}px`;
      trailElement.style.top = `${event.clientY}px`;
    }
  };
  
  onMounted(() => {
    window.addEventListener('mousemove', updateTrail);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', updateTrail);
  });
  </script>
  
  <style scoped>
  .mouse-trail {
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: rgba(128, 0, 128, 0.5); /* Purple color */
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.1s ease, opacity 0.1s ease;
    opacity: 0.8;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(128, 0, 128, 0.5), 0 0 20px rgba(128, 0, 128, 0.3);
  }
  </style>