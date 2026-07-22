import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const elementRef = ref(null)
  const isVisible = ref(false)
  const hasAnimated = ref(false)
  let observer = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (!hasAnimated.value) {
            hasAnimated.value = true
          }
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          isVisible.value = false
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { elementRef, isVisible, hasAnimated }
}
