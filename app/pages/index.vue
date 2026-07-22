<template>
  <div class="overflow-hidden">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturedDrinks />
      <WhyChooseUs />
      <PromotionBanner />
      <Categories />
      <AboutSection />
      <Testimonials />
      <Franchise />
      <Colorfull />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "HowYa | Premium Bubble Tea",
  description:
    "Discover handcrafted premium bubble tea made with the finest ingredients. Taste happiness, one sip at a time.",
  ogTitle: "Boba Bloom | Premium Bubble Tea",
  ogDescription:
    "Discover handcrafted premium bubble tea made with the finest ingredients. Taste happiness, one sip at a time.",
  ogType: "website",
  twitterCard: "summary_large_image",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: "antialiased",
  },
});
</script>
