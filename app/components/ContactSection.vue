<template>
  <section
    id="contact"
    class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-cream"
  >
    <div
      class="blob-sm w-[500px] h-[500px] bg-gradient-to-br from-secondary-100 to-pink-100 top-0 left-0 animate-drift pointer-events-none"
    />
    <div
      class="blob-sm w-[400px] h-[400px] bg-gradient-to-br from-primary-100 to-accent-100 bottom-0 right-0 animate-drift-reverse pointer-events-none"
    />

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4 shadow-sm animate-fade-up"
        >
          <svg
            class="w-5 h-5 text-secondary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Get in Touch
        </div>
        <h2
          class="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-up animation-delay-200"
        >
          We'd Love to <span class="text-gradient">Hear</span> From You
        </h2>
        <p class="text-lg text-gray-600 animate-fade-up animation-delay-400">
          Have a question, feedback, or just want to say hi? Drop us a message
          and we'll get back to you as soon as possible.
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <div
          class="lg:col-span-2 space-y-6 animate-fade-up animation-delay-200"
        >
          <div class="glass-card rounded-2xl p-6">
            <h3 class="font-display font-bold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0 mt-0.5"
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">
                    Our Location
                  </div>
                  <p class="text-gray-500 text-sm mt-0.5">
                    123 Bubble Tea Lane, Suite 100<br />San Francisco, CA 94102
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 flex-shrink-0 mt-0.5"
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">
                    Email Us
                  </div>
                  <a
                    href="mailto:hello@bobabloom.com"
                    class="text-gray-500 text-sm mt-0.5 hover:text-primary-600 transition-colors"
                    >hello@bobabloom.com</a
                  >
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0 mt-0.5"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">Call Us</div>
                  <a
                    href="tel:+14155550123"
                    class="text-gray-500 text-sm mt-0.5 hover:text-primary-600 transition-colors"
                    >+1 (415) 555-0123</a
                  >
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0 mt-0.5"
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">
                    Business Hours
                  </div>
                  <p class="text-gray-500 text-sm mt-0.5">
                    Mon - Fri: 9:00 AM - 9:00 PM<br />Sat - Sun: 10:00 AM - 7:00
                    PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-6">
            <h3 class="font-display font-bold text-gray-900 mb-4">Follow Us</h3>
            <div class="flex gap-3">
              <a
                href="#"
                class="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center hover:bg-secondary-500 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 animate-fade-up animation-delay-400">
          <div class="glass-card rounded-[2rem] p-8 sm:p-10 space-y-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7904426391347!2d90.37926961625666!3d23.763057978348087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70030f72dad%3A0xb1e04b25c323f66e!2sBangladesh%20National%20Parliament%20House!5e0!3m2!1sen!2sbd!4v1784637207866!5m2!1sen!2sbd"
              width="100%"
              height="420"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitting = ref(false);

function handleSubmit() {
  submitting.value = true;
  setTimeout(() => {
    submitting.value = false;
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
    alert("Thank you for your message! We will get back to you soon.");
  }, 1500);
}
</script>
