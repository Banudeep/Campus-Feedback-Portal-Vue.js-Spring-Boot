<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg gmu-nav">
      <div class="container">
        <router-link class="navbar-brand" to="/">GMU Survey</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/survey">Survey Form</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list">Survey List</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mt-4">
      <router-view></router-view>
    </main>

    <footer class="text-center py-4 mt-4" style="background-color: var(--gmu-green); color: var(--gmu-yellow);">
      <p>&copy; {{ currentYear }} George Mason University. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'App',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script>
