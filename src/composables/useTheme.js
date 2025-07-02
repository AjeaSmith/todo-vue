import { ref, watch } from 'vue'

const currentTheme = ref(localStorage.getItem('theme') || 'light')

watch(
  currentTheme,
  (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  },
  { immediate: true },
)

export function useTheme() {
  return {
    currentTheme,
    toggleTheme: () => {
      currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    },
  }
}
