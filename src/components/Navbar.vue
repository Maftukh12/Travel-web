<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const isMenuOpen = ref(false);

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Tours', href: '#tours' },
  { name: 'Contact', href: '#contact' },
];
</script>

<template>
  <nav class="bg-white fixed w-full z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-travel-primary">TRAVEL DEST</span>
        </div>
        
        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in navigation" 
             :key="item.name" 
             :href="item.href"
             class="text-gray-700 hover:text-travel-primary px-3 py-2 rounded-md text-sm font-medium">
            {{ item.name }}
          </a>
          <button class="bg-travel-primary text-white px-4 py-2 rounded-md hover:bg-travel-secondary transition duration-300">
            Book Now
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700">
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a v-for="item in navigation" 
           :key="item.name" 
           :href="item.href"
           @click="isMenuOpen = false"
           class="text-gray-700 hover:text-travel-primary block px-3 py-2 rounded-md text-base font-medium">
          {{ item.name }}
        </a>
        <button class="w-full bg-travel-primary text-white px-4 py-2 rounded-md hover:bg-travel-secondary transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  </nav>
</template>