<script setup lang="ts">
import { useNav } from '@slidev/client'
import { useTransition } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { ctxColor, pick } from './statusline'

const { currentFrontmatter: fm, clicks } = useNav()

// Slides without a ctx keep the previous reading; null blanks it (after /compact).
const target = ref<number | null>(12)
watch([fm, clicks], () => {
  const v = pick<number | null>(fm.value.ctx, clicks.value)
  if (v !== undefined)
    target.value = v
}, { immediate: true })

const frozen = computed(() => !!pick(fm.value.frozen, clicks.value))
const shown = useTransition(computed(() => target.value ?? 0), { duration: 900 })
const pct = computed(() => Math.round(shown.value))
</script>

<template>
  <div class="statusline" :class="{ frozen }">
    <span class="sl-ctx">ctx
      <span class="sl-bar">
        <i :class="ctxColor(pct)" :style="{ width: target === null ? '0%' : `${shown}%` }" />
        <em class="tick dumb" title="dumb zone ≈ 33%" /><em class="tick land" title="land the plane: 40%" />
      </span>
      <b :class="target === null ? '' : ctxColor(pct)">{{ target === null ? '—' : `${pct}%` }}</b>
    </span>
  </div>
</template>
