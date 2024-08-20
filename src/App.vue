<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="max-w-5xl mx-auto">
      <RouterLink to="/amorphous-material-list">
        Amorphous
      </RouterLink>
    </nav>
  </header>

  <div class="max-w-5xl mx-auto">
    <RouterView />
  </div>
</template>
