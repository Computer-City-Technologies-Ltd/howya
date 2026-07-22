<template>
  <section class="relative py-20 md:py-28 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-500 via-pink-500 to-secondary-600"
    />

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 animate-float"
      />
      <div
        class="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 animate-float-slow"
      />
      <div
        class="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-white/5 animate-float-slower"
      />

      <div
        class="absolute top-20 left-1/4 w-6 h-6 rounded-full bg-white/10 animate-bubble-rise"
      />
      <div
        class="absolute top-40 right-1/4 w-4 h-4 rounded-full bg-white/10 animate-bubble-rise-delayed"
      />
      <div
        class="absolute bottom-32 left-1/3 w-5 h-5 rounded-full bg-white/10 animate-bubble-rise-slow"
      />
      <div
        class="absolute bottom-20 right-1/3 w-8 h-8 rounded-full bg-white/10 animate-bubble-rise"
      />
      <div
        class="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-white/10 animate-bubble-rise-delayed"
      />
      <div
        class="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-white/10 animate-bubble-rise-slow"
      />
      <div
        class="absolute bottom-40 left-1/2 w-4 h-4 rounded-full bg-white/10 animate-bubble-rise"
      />

      <img
        src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80&h=80&fit=crop&auto=format"
        alt=""
        loading="lazy"
        class="absolute top-16 right-20 w-16 h-16 rounded-full object-cover opacity-15 animate-float"
      />
      <img
        src="https://images.unsplash.com/photo-1558857563-b371033873b8?w=80&h=80&fit=crop&auto=format"
        alt=""
        loading="lazy"
        class="absolute bottom-20 left-20 w-20 h-20 rounded-full object-cover opacity-15 animate-float-slow"
      />
      <img
        src="https://images.unsplash.com/photo-1543854926-36f9b6e96435?w=60&h=60&fit=crop&auto=format"
        alt=""
        loading="lazy"
        class="absolute top-1/2 right-12 w-12 h-12 rounded-full object-cover opacity-10 animate-float-slower"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
      >
        <div class="text-center lg:text-left space-y-6">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white/90 text-sm font-semibold backdrop-blur-sm"
          >
            <span class="w-2 h-2 rounded-full bg-white animate-pulse" />
            Limited Time Offer
          </div>

          <h2
            class="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1]"
          >
            <span class="block">Buy 2</span>
            <span class="block text-primary-200">Get 1 Free</span>
          </h2>

          <p class="text-lg text-white/80 max-w-md mx-auto lg:mx-0">
            Order any two premium drinks and get a third one on us. Mix and
            match your favorites!
          </p>
        </div>

        <div class="relative flex-shrink-0">
          <div class="relative w-64 h-64 sm:w-80 sm:h-80">
            <div
              class="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-slow"
            />
            <div
              class="absolute inset-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 animate-float"
            />
            <div
              class="absolute inset-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10 animate-float-slower flex items-center justify-center"
            >
              <div class="text-center">
                <div class="text-6xl mb-2">🧋</div>
                <div class="text-white font-display font-bold text-lg">
                  Free
                </div>
                <div class="text-white/70 text-sm">with any 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none"
    />
  </section>
</template>

<script setup></script>
