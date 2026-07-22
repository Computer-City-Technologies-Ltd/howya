<template>
  <section id="menus" class="relative py-20 md:py-32 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream"
    />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="blob-sm w-[500px] h-[500px] bg-gradient-to-br from-primary-100 to-pink-100 top-0 right-0 animate-drift"
      />
      <div
        class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-secondary-100 to-accent-100 bottom-0 left-0 animate-drift-reverse"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 shadow-sm"
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
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
          </svg>
          Our Menu
        </div>
        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Featured Drinks
        </h2>
        <p class="text-lg text-gray-600">
          Discover our handcrafted selection of premium bubble tea creations
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          v-for="(drink, index) in drinks"
          :key="drink.name"
          class="group glass-card rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer animate-fade-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div
            class="relative mb-5 rounded-2xl overflow-hidden aspect-square shadow-lg bg-gradient-to-br from-primary-100 to-pink-100"
          >
            <img
              :src="drink.image"
              :alt="drink.name"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              @error="onImgError($event, drink)"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <button
              class="absolute top-3 right-3 p-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 z-10"
              :class="drink.favorited ? 'text-pink-500' : 'text-gray-400'"
              @click="drink.favorited = !drink.favorited"
              aria-label="Toggle favorite"
            >
              <svg
                class="w-5 h-5"
                :fill="drink.favorited ? 'currentColor' : 'none'"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <div
              class="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-primary-600 shadow-sm z-10"
            >
              <span class="flex items-center gap-1">
                <svg
                  class="w-3.5 h-3.5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                {{ drink.rating }}
              </span>
            </div>
          </div>

          <div class="flex items-start justify-between mb-2">
            <h3 class="font-display text-lg font-bold text-gray-900">
              {{ drink.name }}
            </h3>
            <span class="font-display text-lg font-bold text-gradient"
              >${{ drink.price }}</span
            >
          </div>
          <p class="text-sm text-gray-500 mb-4 line-clamp-2">
            {{ drink.description }}
          </p>

          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-1.5">
              <span
                class="w-2 h-2 rounded-full"
                :class="
                  drink.spice === 'Mild'
                    ? 'bg-accent-500'
                    : drink.spice === 'Medium'
                      ? 'bg-primary-500'
                      : 'bg-pink-500'
                "
              />
              <span class="text-xs text-gray-400">{{ drink.spice }}</span>
            </div>
            <button
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const drinks = [
  {
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=600&fit=crop&auto=format",
    name: "Brown Sugar Milk Tea",
    description:
      "Handmade boba pearls with rich brown sugar syrup and fresh milk",
    price: "6.99",
    rating: 4.9,
    spice: "Mild",
    favorited: true,
    fallback: "from-amber-200 to-amber-100",
  },
  {
    image:
      "https://images.unsplash.com/photo-1639927663411-35f23bb792b7?w=600&h=600&fit=crop&auto=format",
    name: "Strawberry Bliss",
    description:
      "Fresh strawberry puree with creamy milk and strawberry popping pearls",
    price: "7.49",
    rating: 4.8,
    spice: "Mild",
    favorited: false,
    fallback: "from-pink-200 to-pink-100",
  },
  {
    image:
      "https://images.unsplash.com/photo-1734770580735-796a00e42cb2?w=600&h=600&fit=crop&auto=format",
    name: "Mango Fruit Tea",
    description: "Sweet mango puree with coconut jelly and green tea base",
    price: "7.99",
    rating: 4.9,
    spice: "Medium",
    favorited: false,
    fallback: "from-yellow-200 to-yellow-100",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=600&fit=crop&auto=format",
    name: "Taro Milk Tea",
    description:
      "Creamy taro root with chewy boba pearls and a hint of vanilla",
    price: "7.29",
    rating: 4.7,
    spice: "Mild",
    favorited: true,
    fallback: "from-purple-200 to-purple-100",
  },
  {
    image:
      "https://images.unsplash.com/photo-1718065598477-505b9c2e764d?w=600&h=600&fit=crop&auto=format",
    name: "Taro Milk Tea",
    description:
      "Creamy taro root with chewy boba pearls and a hint of vanilla",
    price: "7.29",
    rating: 4.7,
    spice: "Mild",
    favorited: true,
    fallback: "from-purple-200 to-purple-100",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&h=600&fit=crop&auto=format",
    name: "Taro Milk Tea",
    description:
      "Creamy taro root with chewy boba pearls and a hint of vanilla",
    price: "7.29",
    rating: 4.7,
    spice: "Mild",
    favorited: true,
    fallback: "from-purple-200 to-purple-100",
  },
];

function onImgError(event, drink) {
  event.target.style.display = "none";
}
</script>
