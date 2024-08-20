<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="max-w-5xl mx-auto px-4 lg:px-0">
      <RouterLink to="/amorphous-material-list">
        Amorphous
      </RouterLink>
    </nav>
  </header>

  <div class="max-w-5xl mx-auto px-4 lg:px-0">
    <RouterView />
  </div>
</template>
