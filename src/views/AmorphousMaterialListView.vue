<script setup lang="ts">
import { amorphous } from '@/collections/amorphous';
import AmorphousCard from '@/components/AmorphousCard.vue';

const filteredAmorphous = computed(() => {

  return amorphous
})
</script>

<template>
  <div>
    <h1 class="text-3xl my-4 text-orange-300">
      Amorphous Material List
    </h1>

    <div class="grid lg:grid-cols-2 gap-2">
      <AmorphousCard 
        v-for="a in filteredAmorphous"
        :key="a.code"
        class="bg-stone-700 rounded-lg p-2 flex"
        :amorphous="a"
      />
    </div>
  </div>
</template>