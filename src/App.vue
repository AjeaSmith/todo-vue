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
      <p class="helper-text">Drag and drop to reorder list</p>
    </div>
  </div>
</template>

<style>
.helper-text {
  font-size: 14px;
  color: #9495a5;
  margin-top: 50px;
  text-align: center;
}
.main-bg {
  height: 12.5rem;
  background: var(--bg-mobile) no-repeat;
  background-position: top;
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.main-wrapper {
  width: 100%;
  max-width: 33.813rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  header {
    margin-bottom: 2rem;
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
  .main-wrapper {
    padding: 4rem 0;
  }
}
</style>
