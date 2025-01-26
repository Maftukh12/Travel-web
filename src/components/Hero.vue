<script setup lang="ts">
import { ref, onMounted } from 'vue';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
    title: 'Discover Your Next Adventure',
    subtitle: 'Explore the world\'s most beautiful destinations'
  },
  {
    url: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    title: 'Experience Paradise',
    subtitle: 'Find your perfect getaway'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    title: 'Create Lasting Memories',
    subtitle: 'Your journey begins here'
  }
];

const currentIndex = ref(0);
const direction = ref('right');

const nextSlide = () => {
  direction.value = 'right';
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  direction.value = 'left';
  currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};

onMounted(() => {
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
</script>

<template>
  <div id="home" class="relative h-screen overflow-hidden">
    <div v-for="(image, index) in images" 
         :key="image.url"
         class="absolute inset-0"
         :class="[
           { 'slide-right': direction === 'right' && currentIndex === index },
           { 'slide-left': direction === 'left' && currentIndex === index },
           { 'hidden': currentIndex !== index }
         ]">
      <img :src="image.url" 
           class="w-full h-full object-cover"
           :alt="`Travel Hero ${index + 1}`" />
      <div class="absolute inset-0 hero-gradient"></div>
    </div>
    
    <!-- Navigation Arrows -->
    <button @click="prevSlide" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-travel-primary transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-travel-primary transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
      <div class="text-white stagger-children">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 slide-up">{{ images[currentIndex].title }}</h1>
        <p class="text-xl md:text-2xl mb-8 slide-up">{{ images[currentIndex].subtitle }}</p>
        <button class="bg-travel-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-travel-secondary transition duration-300 slide-up">
          Start Your Journey
        </button>
      </div>
    </div>

    <!-- Navigation dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
      <button v-for="(_, index) in images" 
              :key="index"
              @click="currentIndex = index"
              class="w-3 h-3 rounded-full transition-colors duration-300"
              :class="currentIndex === index ? 'bg-white' : 'bg-white/50'">
      </button>
    </div>
  </div>
</template>