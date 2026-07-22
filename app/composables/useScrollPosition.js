import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollPosition() {
  const scrollY = ref(0)
  const isScrolled = ref(false)

  function handleScroll() {
    scrollY.value = window.scrollY
    isScrolled.value = window.scrollY > 50
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrollY, isScrolled }
}
