<template>
  <section
    id="franchise"
    class="relative py-20 md:py-32 overflow-hidden bg-cream"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-semibold mb-4 shadow-sm"
        >
          <svg
            class="w-5 h-5 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Franchise
        </div>
        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Invest in your future With Us
        </h2>
        <p class="text-lg text-gray-600">
          innovative leader in the boba and beverage category with a growing
          legion of fans the world over. Sourcing a variety of locations from
          malls to popular street locations and kiosks, we are busy doing the
          research for your new T-Brewery.
        </p>
      </div>
    </div>

    <div class="text-center mt-10">
      <button
        class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 bg-gradient-to-r from-pink-500 to-secondary-500 text-white hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1 shadow-lg"
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
          />
        </svg>
        Follow Us on Instagram
      </button>
    </div>
  </section>
</template>

<script setup>
const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=600&fit=crop&auto=format",
    likes: "2.4K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop&auto=format",
    likes: "1.8K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop&auto=format",
    likes: "3.1K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543854926-36f9b6e96435?w=600&h=600&fit=crop&auto=format",
    likes: "2.7K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572490122747-55b1e0cd5a23?w=600&h=600&fit=crop&auto=format",
    likes: "1.5K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&h=600&fit=crop&auto=format",
    likes: "2.9K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop&auto=format",
    likes: "1.2K",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&h=600&fit=crop&auto=format",
    likes: "2.1K",
  },
];

function onImgError(event) {
  event.target.style.display = "none";
}
</script>
