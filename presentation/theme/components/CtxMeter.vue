<script setup lang="ts">
defineProps<{ pct: number, label?: string, bare?: boolean, tone?: 'red' | 'green', slow?: boolean }>()
</script>

<template>
  <div class="ctx-meter" :class="[tone, { slow, labelled: label }]" :style="{ '--p': pct }">
    <i />
    <span v-if="!bare" class="ctx-meter-lbl">{{ label }}</span>
    <slot />
  </div>
</template>
