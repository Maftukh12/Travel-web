<script setup lang="ts">
import { ref, onMounted } from 'vue';

const tours = [
  {
    title: 'Island Hopping Adventure',
    duration: '7 Days',
    price: '$1,299',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Cultural Heritage Tour',
    duration: '10 Days',
    price: '$1,799',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Mountain Expedition',
    duration: '5 Days',
    price: '$999',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
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

  const section = document.querySelector('#tours');
  if (section) observer.observe(section);
});
</script>

<template>
  <section id="tours" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
        <p class="text-lg text-gray-600">Unforgettable experiences curated just for you</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children" :class="{ 'fade-in-up': isVisible }">
        <div v-for="tour in tours" 
             :key="tour.title" 
             class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <img :src="tour.image" 
               :alt="tour.title"
               class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ tour.title }}</h3>
            <div class="flex justify-between items-center mb-4">
              <span class="text-gray-600">{{ tour.duration }}</span>
              <span class="text-travel-primary font-bold">{{ tour.price }}</span>
            </div>
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="ml-2 text-gray-600">{{ tour.rating }}/5.0</span>
            </div>
            <button class="w-full bg-travel-primary text-white px-4 py-2 rounded-md hover:bg-travel-secondary transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>