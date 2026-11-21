<script setup lang="ts">
defineProps<{ pct: number, label?: string, tone?: 'red' | 'green', slow?: boolean }>()
</script>

<template>
  <div class="ctx-meter" :class="[tone, { slow, labelled: label }]" :style="{ '--p': pct }">
    <i />
    <span>{{ label }}</span>
    <slot />
  </div>
</template>
