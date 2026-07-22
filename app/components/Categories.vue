<template>
  <section class="relative py-20 md:py-32 overflow-hidden bg-white">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-secondary-100 to-pink-100 top-0 left-0 animate-drift" />
      <div class="blob-sm w-[350px] h-[350px] bg-gradient-to-br from-primary-100 to-accent-100 bottom-0 right-0 animate-drift-reverse" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4 shadow-sm">
          <svg class="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
          </svg>
          Categories
        </div>
        <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Popular Categories</h2>
        <p class="text-lg text-gray-600">Find your perfect drink from our curated collection of flavors</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          class="group flex flex-col items-center gap-4 p-6 rounded-3xl transition-all duration-500 cursor-pointer bg-white shadow-md hover:shadow-xl hover:-translate-y-1 animate-fade-up"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <div
            class="relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl overflow-hidden shadow-md"
            :style="{ background: category.bg }"
          >
            <img
              :src="category.image"
              :alt="category.name"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover absolute inset-0 transition-all duration-500 group-hover:scale-110"
              @error="onImgError($event)"
            />
          </div>

          <div class="text-center">
            <h3 class="font-display font-bold text-gray-900 text-sm sm:text-base">{{ category.name }}</h3>
            <p class="text-xs text-gray-500 mt-0.5">{{ category.count }} drinks</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=200&h=200&fit=crop&auto=format', name: 'Milk Tea', count: 12, bg: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' },
  { image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop&auto=format', name: 'Fruit Tea', count: 10, bg: 'linear-gradient(135deg, #FDF2F8, #FBCFE8)' },
  { image: 'https://images.unsplash.com/photo-1543854926-36f9b6e96435?w=200&h=200&fit=crop&auto=format', name: 'Brown Sugar', count: 8, bg: 'linear-gradient(135deg, #FED7AA, #FDBA74)' },
  { image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=200&h=200&fit=crop&auto=format', name: 'Cheese Foam', count: 6, bg: 'linear-gradient(135deg, #FEF9C3, #FDE047)' },
  { image: 'https://images.unsplash.com/photo-1572490122747-55b1e0cd5a23?w=200&h=200&fit=crop&auto=format', name: 'Smoothie', count: 7, bg: 'linear-gradient(135deg, #FCE7F3, #F9A8D4)' },
  { image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop&auto=format', name: 'Coffee', count: 5, bg: 'linear-gradient(135deg, #FED7AA, #A8A29E)' }
]

function onImgError(event) {
  event.target.style.display = 'none'
}
</script>
