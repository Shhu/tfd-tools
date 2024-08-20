<script setup lang="ts">
import { amorphous } from '@/collections/amorphous';

const filteredAmorphous = computed(() => {

  return amorphous
})
</script>

<template>
  <div>
    <h1>Amorphous Material List</h1>

    <ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      <li
        v-for="a in filteredAmorphous"
        :key="a.code"
        class="bg-stone-700 rounded-lg p-2"
      >
        {{ a.code }}
        {{ a.sourceType }}
        {{ a.openersType }}
      </li>
    </ul>
  </div>
</template>