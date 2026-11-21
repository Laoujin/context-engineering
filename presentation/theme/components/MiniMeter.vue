<script setup lang="ts">
import { ctxColor } from '../statusline'

withDefaults(defineProps<{ pct: number, w?: number, label?: string }>(), { w: 520, label: '' })
</script>

<template>
  <div class="mini-meter" :style="{ '--w': `${w}px` }">
    <span>{{ label }}</span>
    <span class="mm-bar"><i :style="{ width: `${pct}%` }" :class="ctxColor(pct)" /><em class="tick dumb" /><em class="tick land" /></span>
    <b>{{ pct }}%</b>
  </div>
</template>
