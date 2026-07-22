<template>
  <section id="reviews" class="relative py-20 md:py-32 overflow-hidden bg-white">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-primary-100 to-pink-100 top-0 left-0 animate-drift" />
      <div class="blob-sm w-[300px] h-[300px] bg-gradient-to-br from-secondary-100 to-pink-100 bottom-0 right-0 animate-drift-reverse" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-semibold mb-4 shadow-sm">
          <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          Testimonials
        </div>
        <h2 class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">What Our Customers Say</h2>
        <p class="text-lg text-gray-600">Join thousands of happy bubble tea lovers</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="review.name"
          class="bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-xl border border-gray-100 animate-fade-up"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="flex items-center gap-4 mb-5">
            <div class="w-14 h-14 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 bg-gradient-to-br from-primary-100 to-pink-100">
              <img
                :src="review.avatar"
                :alt="review.name"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
                @error="onAvatarError($event, review)"
              />
            </div>
            <div>
              <h4 class="font-display font-bold text-gray-900">{{ review.name }}</h4>
              <p class="text-sm text-gray-500">{{ review.role }}</p>
            </div>
          </div>

          <div class="flex gap-1 mb-4">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= review.rating ? 'text-amber-400' : 'text-gray-200'" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <p class="text-gray-600 leading-relaxed">"{{ review.text }}"</p>

          <div class="mt-5 pt-5 border-t border-gray-100">
            <div class="flex items-center gap-2 text-sm">
              <span class="text-primary-500 font-semibold">{{ review.drink }}</span>
              <span class="text-gray-300">•</span>
              <span class="text-gray-400">{{ review.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format',
    initials: 'SK',
    name: 'Sarah Kim',
    role: 'Regular Customer',
    rating: 5,
    text: 'Absolutely obsessed with their Brown Sugar Milk Tea! The boba pearls are always perfectly chewy, and the tea flavor is unmatched. Best bubble tea I have ever had!',
    drink: 'Brown Sugar Milk Tea',
    date: '2 days ago'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format',
    initials: 'MJ',
    name: 'Marcus Johnson',
    role: 'Tea Enthusiast',
    rating: 5,
    text: 'The Matcha Latte is a game-changer. You can really taste the quality of their matcha powder. The atmosphere in their shops is always vibrant and welcoming.',
    drink: 'Matcha Latte',
    date: '1 week ago'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format',
    initials: 'AL',
    name: 'Amy Liu',
    role: 'Food Blogger',
    rating: 5,
    text: 'As a food blogger, I have tried bubble tea from dozens of places. Boba Bloom stands out for their creativity and quality. The Mango Paradise is pure bliss!',
    drink: 'Mango Paradise',
    date: '3 weeks ago'
  }
]

function onAvatarError(event, review) {
  event.target.style.display = 'none'
  event.target.parentElement.innerHTML = `<div class="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br from-primary-400 to-pink-500">${review.initials}</div>`
}
</script>
