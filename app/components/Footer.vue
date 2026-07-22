<template>
  <footer id="footer" class="relative bg-gray-900 text-white overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
    <div
      class="blob-sm w-[600px] h-[600px] bg-gradient-to-br from-primary-500/10 to-pink-500/10 top-0 right-0 animate-drift pointer-events-none"
    />
    <div
      class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-secondary-500/10 to-accent-500/10 bottom-0 left-0 animate-drift-reverse pointer-events-none"
    />

    <div class="relative z-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div class="space-y-5">
            <div class="flex items-center gap-2">
              <div
                class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 to-pink-500 flex items-center justify-center shadow-lg shadow-primary-500/25"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                </svg>
              </div>
              <span class="font-display font-bold text-xl text-white"
                >Boba Bloom</span
              >
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Crafting happiness one cup at a time. Premium bubble tea made with
              love and the finest ingredients.
            </p>
            <div class="flex items-center gap-3">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                class="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1"
                :aria-label="social.name"
                v-html="social.icon"
              />
            </div>
          </div>

          <div>
            <h4
              class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5"
            >
              Quick Links
            </h4>
            <ul class="space-y-3">
              <li v-for="link in quickLinks" :key="link.label">
                <NuxtLink
                  :to="link.href"
                  class="text-gray-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-block"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5"
            >
              Our Menu
            </h4>
            <ul class="space-y-3">
              <li v-for="item in menuLinks" :key="item.label">
                <NuxtLink
                  :to="item.href"
                  class="text-gray-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-block"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="font-display font-bold text-white text-sm uppercase tracking-wider mb-5"
            >
              Contact Us
            </h4>
            <ul class="space-y-4">
              <li
                v-for="contact in contactInfo"
                :key="contact.label"
                class="flex items-start gap-3"
              >
                <svg
                  class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path :d="contact.icon" />
                </svg>
                <span class="text-gray-400 text-sm">{{ contact.value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p class="text-gray-500 text-sm">
            &copy; {{ new Date().getFullYear() }} Boba Bloom. All rights
            reserved.
          </p>
          <div class="flex items-center gap-6">
            <NuxtLink
              to="/"
              class="text-gray-500 text-sm hover:text-primary-400 transition-colors duration-300"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink
              to="/"
              class="text-gray-500 text-sm hover:text-primary-400 transition-colors duration-300"
              >Terms of Service</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>',
  },
  {
    name: "Facebook",
    href: "#",
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg>',
  },
  {
    name: "X (Twitter)",
    href: "#",
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4l6.5 7.5M20 4l-6.5 7.5M4 20l10-11.5M20 20L10 8.5M13.5 12.5L20 20M4 4l10 11.5"/></svg>',
  },
  {
    name: "TikTok",
    href: "#",
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9.5v1.2a6 6 0 0 1-6.5-1.5v6.8a4.5 4.5 0 1 1-3-4.2v2.2a2.3 2.3 0 1 0 3 2V3h2.8a6 6 0 0 0 3.7 6Z"/></svg>',
  },
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Menu", href: "#featured" },
  { label: "Best Sellers", href: "#featured" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#footer" },
];

const menuLinks = [
  { label: "Milk Tea", href: "#featured" },
  { label: "Fruit Tea", href: "#featured" },
  { label: "Brown Sugar", href: "#featured" },
  { label: "Cheese Foam", href: "#featured" },
  { label: "Smoothies", href: "#featured" },
  { label: "Coffee", href: "#featured" },
];

const contactInfo = [
  {
    label: "Location",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
    value: "123 Bubble Tea Lane, Drinkville, DT 10001",
  },
  {
    label: "Email",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    value: "hello@bobabloom.com",
  },
  {
    label: "Phone",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
    value: "+1 (555) 123-4567",
  },
];
</script>
