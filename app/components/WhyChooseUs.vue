<template>
  <section class="relative py-20 md:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-cream via-primary-50/30 to-cream" />
    <div class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-primary-200 to-accent-200 top-0 right-0 animate-drift pointer-events-none" />
    <div class="blob-sm w-[300px] h-[300px] bg-gradient-to-br from-pink-200 to-secondary-200 bottom-0 left-0 animate-drift-reverse pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4 shadow-sm">
          <svg class="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          Why Choose Us
        </div>
        <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">The Boba Bloom Difference</h2>
        <p class="text-lg text-gray-600">We source only the finest ingredients to create unforgettable bubble tea experiences</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(item, index) in features"
          :key="item.title"
          class="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-white animate-fade-up shadow-xl"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="relative aspect-[4/3] overflow-hidden" :class="item.fallback">
            <img
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              @error="onImgError($event)"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div
              class="absolute inset-0 opacity-30 mix-blend-overlay"
              :style="{ background: item.overlay }"
            />
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-6">
            <div class="w-12 h-1 rounded-full mb-4" :style="{ background: item.gradient }" />
            <h3 class="font-display text-xl font-bold text-white mb-1.5">{{ item.title }}</h3>
            <p class="text-sm text-white/80 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=450&fit=crop&auto=format',
    title: 'Fresh Ingredients',
    description: 'Locally-sourced fruits and premium ingredients in every drink.',
    overlay: 'linear-gradient(135deg, #22C55E, #16A34A)',
    gradient: 'linear-gradient(135deg, #22C55E, #4ADE80)',
    fallback: 'bg-gradient-to-br from-green-200 to-green-100'
  },
  {
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&h=450&fit=crop&auto=format',
    title: 'Premium Tea Leaves',
    description: 'Single-origin tea leaves imported from the finest estates.',
    overlay: 'linear-gradient(135deg, #F59E0B, #D97706)',
    gradient: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
    fallback: 'bg-gradient-to-br from-amber-200 to-yellow-100'
  },
  {
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=450&fit=crop&auto=format',
    title: 'Organic Milk',
    description: 'Fresh organic dairy and premium plant-based alternatives.',
    overlay: 'linear-gradient(135deg, #EC4899, #DB2777)',
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    fallback: 'bg-gradient-to-br from-pink-200 to-pink-100'
  },
  {
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=450&fit=crop&auto=format',
    title: 'Handmade Daily',
    description: 'Every batch of boba pearls is made fresh by hand each morning.',
    overlay: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    fallback: 'bg-gradient-to-br from-purple-200 to-purple-100'
  }
]

function onImgError(event) {
  event.target.style.display = 'none'
}
</script>
