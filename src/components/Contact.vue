<script setup lang="ts">
import { ref, onMounted } from 'vue';

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Handle form submission
};

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  const section = document.querySelector('#contact');
  if (section) observer.observe(section);
});
</script>

<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p class="text-lg text-gray-600">Get in touch to plan your next adventure</p>
      </div>

      <div class="max-w-3xl mx-auto scale-in" :class="{ 'fade-in-up': isVisible }">
        <form @submit="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" 
                     id="name" 
                     name="name" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-travel-primary focus:ring-travel-primary" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" 
                     id="email" 
                     name="email" 
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-travel-primary focus:ring-travel-primary" />
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" 
                      name="message" 
                      rows="4" 
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-travel-primary focus:ring-travel-primary"></textarea>
          </div>
          <div>
            <button type="submit" 
                    class="w-full bg-travel-primary text-white px-6 py-3 rounded-md hover:bg-travel-secondary transition duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>