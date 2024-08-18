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
        {{ a.openerType }}
      </li>
    </ul>
  </div>
</template>