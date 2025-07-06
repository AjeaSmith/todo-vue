<script setup>
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'
import { useTheme } from '@/composables/useTheme.js'

const { currentTheme, toggleTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme" type="button">
    <IconMoon v-if="currentTheme === 'light'" />
    <IconSun v-else />
  </button>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
