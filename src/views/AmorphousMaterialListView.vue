<script setup lang="ts">
import { amorphous } from '@/collections/amorphous';
import AmorphousCard from '@/components/AmorphousCard.vue';

const filters = ref({
  code: '',
  descendant: '',
  weapon: '',
  sourceType: '',
})

const filteredAmorphous = computed(() => {
  let _amorphous = [...amorphous]

  if(filters.value.code.length > 0) 
    _amorphous = _amorphous.filter(a => a.code === filters.value.code)

  if(filters.value.sourceType.length > 0) 
    _amorphous = _amorphous.filter(a => a.sourceType === filters.value.sourceType)

  if(filters.value.descendant.length > 0)
    _amorphous = _amorphous.filter(a => {
      if(a.drop1.startsWith(filters.value.descendant)) return true
      if(a.drop2.startsWith(filters.value.descendant)) return true
      if(a.drop3.startsWith(filters.value.descendant)) return true
      if(a.drop4.startsWith(filters.value.descendant)) return true
      if(a.drop5.startsWith(filters.value.descendant)) return true
    })

  if(filters.value.weapon.length > 0)
    _amorphous = _amorphous.filter(a => {
      if(a.drop1.startsWith(filters.value.weapon)) return true
      if(a.drop2.startsWith(filters.value.weapon)) return true
      if(a.drop3.startsWith(filters.value.weapon)) return true
      if(a.drop4.startsWith(filters.value.weapon)) return true
      if(a.drop5.startsWith(filters.value.weapon)) return true
    })

  return _amorphous
})
</script>

<template>
  <div>
    <h1 class="text-3xl my-4 text-orange-300">
      Amorphous Material List
    </h1>

    <section class="my-8">
      <div class="p-2 bg-black shadow-lg rounded-md grid gap-4 grid-cols-4">
        <input
          v-model="filters.code"
          type="text"
          placeholder="#"
          class="p-2 rounded bg-slate-900"
        >
        <select
          v-model="filters.descendant"
          placeholder="Descendant"
          class="p-2 rounded bg-slate-900"
        >
          <option />
          <option>Ajax</option>
          <option>Ultimate Ajax</option>
          <option>Ultimate Bunny</option>
          <option>Enzo</option>
          <option>Esiemo</option>
          <option>Ultimate Freyna</option>
          <option>Gley</option>
          <option>Ultimate Gley</option>
          <option>Jayber</option>
          <option>Kyle</option>
          <option>Lepic</option>
          <option>Ultimate Lepic</option>
          <option>Luna</option>
          <option>Valby</option>
          <option>Ultimate Valby</option>
          <option>Viessa</option>
          <option>Ultimate Viessa</option>
          <option>Yujin</option>
        </select>
        <select
          v-model="filters.weapon"
          placeholder="Weapon"
          class="p-2 rounded bg-slate-900"
        >
          <option />
          <option>The Final Masterpiece</option>
          <option>Python</option>
          <option>Enduring Legacy</option>
          <option>Albion Cavalry Gun</option>
          <option>Divine Punishment</option>
          <option>Nazeistra's Devotion</option>
          <option>Perforator</option>
          <option>Wave of Light</option>
          <option>Blue Beetle</option>
          <option>Secret Garden</option>
          <option>Greg's Reversed Fate</option>
          <option>King's Guard Lance</option>
          <option>Clairvoyance</option>
          <option>Smithereens</option>
          <option>Executor</option>
          <option>Afterglow Sword</option>
          <option>Piercing Light</option>
          <option>Restored Relic</option>
        </select>
        <select
          v-model="filters.sourceType"
          placeholder="Source"
          class="p-2 rounded bg-slate-900"
        >
          <option />
          <option value="outpost">
            Outpost
          </option>
          <option value="infiltration">
            Infiltration
          </option>
          <option value="special_operation">
            Special Operation
          </option>
        </select>
      </div>
    </section>

    <div class="grid lg:grid-cols-2 gap-2">
      <AmorphousCard 
        v-for="a in filteredAmorphous"
        :key="a.code"
        :amorphous="a"
      />
    </div>
  </div>
</template>