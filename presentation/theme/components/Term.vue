<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

export interface TermLine { t?: string, c?: string, s?: number }

defineProps<{ title?: string, lines: (string | TermLine)[] }>()

const { $clicks } = useSlideContext()
const line = (l: string | TermLine): TermLine => typeof l === 'string' ? { t: l } : l
</script>

<template>
  <div class="term">
    <div class="term-h">
      <i /><i /><i /><span>{{ title ?? 'claude' }}</span>
    </div>
    <div class="term-b">
      <div v-for="(l, i) in lines.map(line)" :key="i" class="tl slidev-vclick-target" :class="[l.c, { 'slidev-vclick-hidden': (l.s ?? 0) > $clicks }]">{{ l.t || ' ' }}</div>
    </div>
  </div>
</template>
