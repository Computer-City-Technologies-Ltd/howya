<template>
  <section
    id="about"
    class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-cream to-white"
  >
    <div
      class="blob-sm w-[500px] h-[500px] bg-gradient-to-br from-primary-100 to-pink-100 top-1/2 right-0 -translate-y-1/2 animate-drift pointer-events-none"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref="imageRef" class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=750&fit=crop&auto=format"
              alt="Our bubble tea story"
              loading="lazy"
              decoding="async"
              class="w-full aspect-[4/5] object-cover transition-all duration-700 hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </div>

          <div
            class="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 shadow-xl hidden sm:block"
          >
            <div class="flex items-center gap-3">
              <div class="flex -space-x-2">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  M
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  S
                </div>
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 border-2 border-white flex items-center justify-center text-white text-sm font-bold"
                >
                  J
                </div>
              </div>
              <div>
                <div class="font-display font-bold text-gray-900 text-sm">
                  2,500+
                </div>
                <div class="text-xs text-gray-500">Happy Customers</div>
              </div>
            </div>
          </div>

          <div
            class="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center shadow-xl shadow-primary-500/30 -rotate-6 hidden sm:flex"
          >
            <svg
              class="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
          </div>
        </div>

        <div ref="textRef" class="space-y-8">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold"
          >
            <svg
              class="w-5 h-5 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Our Story
          </span>

          <h2
            class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.15]"
          >
            Crafting Happiness
            <span class="text-gradient">One Cup</span>
            At A Time
          </h2>

          <div class="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Boba Bloom was born from a simple passion: to share the authentic
              taste of premium bubble tea with the world. Our journey began in a
              small kitchen, experimenting with tea leaves, fresh fruits, and
              handmade tapioca pearls.
            </p>
            <p>
              Today, we've grown into a beloved brand with locations across the
              country, but our commitment to quality remains unchanged. Every
              drink is handcrafted with love, using only the finest ingredients
              sourced from trusted partners around the globe.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-3 p-4 rounded-2xl bg-primary-50">
              <div
                class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span class="font-medium text-gray-900 text-sm"
                >100% Natural Ingredients</span
              >
            </div>
            <div class="flex items-center gap-3 p-4 rounded-2xl bg-pink-50">
              <div
                class="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span class="font-medium text-gray-900 text-sm"
                >Handcrafted Daily</span
              >
            </div>
            <div
              class="flex items-center gap-3 p-4 rounded-2xl bg-secondary-50"
            >
              <div
                class="w-10 h-10 rounded-xl bg-secondary-100 flex items-center justify-center text-secondary-600 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span class="font-medium text-gray-900 text-sm"
                >Eco-Friendly Packaging</span
              >
            </div>
            <div class="flex items-center gap-3 p-4 rounded-2xl bg-accent-50">
              <div
                class="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span class="font-medium text-gray-900 text-sm"
                >Community Love</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const imageRef = ref(null);
const textRef = ref(null);
</script>
