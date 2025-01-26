<script setup lang="ts">
import { ref, onMounted } from 'vue';

const destinations = [
  {
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    description: 'Experience tropical paradise',
  },
  {
    title: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Stunning sunsets and white architecture',
  },
  {
    title: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Ancient wonders and mountain views',
  },
];

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  const section = document.querySelector('#destinations');
  if (section) observer.observe(section);
});
</script>

<template>
  <section id="destinations" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
        <p class="text-lg text-gray-600">Explore our most sought-after travel destinations</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children" :class="{ 'fade-in-up': isVisible }">
        <div v-for="destination in destinations" 
             :key="destination.title" 
             class="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
          <img :src="destination.image" 
               :alt="destination.title"
               class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ destination.title }}</h3>
            <p class="text-gray-600">{{ destination.description }}</p>
            <button class="mt-4 w-full bg-travel-primary text-white px-4 py-2 rounded-md hover:bg-travel-secondary transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>