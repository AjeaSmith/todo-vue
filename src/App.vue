<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import TodoApp from './components/TodoApp.vue'
</script>

<template>
  <div class="main-bg">
    <div class="main-wrapper">
      <header>
        <h1>TODO</h1>
        <ThemeSwitcher />
      </header>
      <TodoApp />
    </div>
  </div>
</template>

<style scoped>
.main-bg {
  background: var(--bg-mobile) no-repeat;
  background-position: top;
  background-size: cover;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.main-wrapper {
  z-index: 100;
  width: 100%;
  max-width: 33.813rem;
  margin: 0 auto;
  padding: 0 1rem;

  header {
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: bold;
      color: white;
      letter-spacing: 15px;
      font-size: 2.5rem;
    }
  }
}

@media (min-width: 43.75rem) {
  .main-bg {
    background: var(--bg-desktop) no-repeat;
    background-position: center;
    background-size: cover;
    height: 18.75rem;
  }
}
</style>
