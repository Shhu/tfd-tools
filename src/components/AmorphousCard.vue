<script setup lang="ts">
import type { Amorphous } from '@/collections/amorphous';
defineProps<{
  amorphous: Amorphous[number]
}>()
</script>

<template>
  <div class="bg-stone-950 rounded-lg p-2 flex">
    <div class="w-16 flex items-center justify-center text-xl font-semibold mr-2 text-sky-200">
      {{ amorphous.code }}
    </div>
    <div class="grid grid-cols-2 gap-2 flex-grow">
      <div>
        <div class="text-white font-semibold">
          {{ amorphous.source }}
        </div>
        <div class="ucfirst text-sm font-semibold text-cyan-50">
          {{ amorphous.sourceType }}
        </div>
      </div>
      <div>
        <div class="text-white font-semibold">
          {{ amorphous.openers.join(', ') }}
        </div>
        <div class="ucfirst text-sm font-semibold text-cyan-50">
          {{ amorphous.openersType.join(', ') }}
        </div>
      </div>
      <div class="col-span-2 grid gap-1">
        <div class="">
          <span class="text-xs font-semibold w-10 inline-flex">
            {{ amorphous.difficulty === 'hard' ? '6%':'3%' }}
          </span>
          {{ amorphous.drop1 }}
        </div>
        <div class="">
          <span class="text-xs font-semibold w-10 inline-flex">
            {{ amorphous.difficulty === 'hard' ? '10%':'6%' }}
          </span>
          {{ amorphous.drop2 }}
        </div>
        <div class="">
          <span class="text-xs font-semibold w-10 inline-flex">
            {{ amorphous.difficulty === 'hard' ? '20%':'15%' }}
          </span>
          {{ amorphous.drop3 }}
        </div>
        <div class="">
          <span class="text-xs font-semibold w-10 inline-flex">
            {{ amorphous.difficulty === 'hard' ? '32%':'38%' }}
          </span>
          {{ amorphous.drop4 }}
        </div>
        <div class="">
          <span class="text-xs font-semibold w-10 inline-flex">
            {{ amorphous.difficulty === 'hard' ? '32%':'38%' }}
          </span>
          {{ amorphous.drop5 }}
        </div>
      </div>
    </div>
  </div>
</template>