<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const { isScrolled } = useScrollPosition();
const mobileOpen = ref(false);
const hoverBtn = ref(false);
const activeSection = ref("hero");

const menuItems = [
  { label: "Home", href: "#hero" },
  { label: "Menus", href: "#menus" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact", href: "#contact" },
];

function onScroll() {
  const sections = [
    "hero",
    "menus",
    "about",
    "reviews",
    "franchise",
    "contact",
  ];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = id;
        break;
      }
    }
  }
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass-strong shadow-lg shadow-black/5'
        : 'bg-white/70 backdrop-blur-sm shadow-sm shadow-black/5',
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 md:h-20">
        <div class="w-full flex flex-wrap items-center justify-between gap-8">
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <img src="/assets/images/logo.webp" alt="Howya Logo" />
          </NuxtLink>
          <button
            class="lg:hidden p-2.5 rounded-xl transition-all duration-300 text-gray-600"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menu"
          >
            <svg
              v-if="!mobileOpen"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div class="hidden lg:flex items-center gap-1">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.href"
              class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300"
              :class="
                activeSection === item.href.slice(1)
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              "
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
      >
        <div class="px-4 py-4 space-y-1">
          <NuxtLink
            v-for="item in menuItems"
            :key="item.label"
            :to="item.href"
            class="block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300"
            :class="
              activeSection === item.href.slice(1)
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
            "
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>
