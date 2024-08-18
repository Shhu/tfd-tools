<script setup lang="ts">
import { amorphous } from '@/collections/amorphous';

</script>

<template>
  <div>
    <h1>Amorphous Material List</h1>

    <ul>
      <li
        v-for="a in amorphous"
        :key="a.code"
      >
        {{ a.code }}
        {{ a.sourceType }}
        {{ a.openersType }}
      </li>
    </ul>
  </div>
</template>