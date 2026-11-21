<script setup lang="ts">
import { useNav } from '@slidev/client'
import { useTransition } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import { ctxColor, pick } from './statusline'

const { currentFrontmatter: fm, clicks } = useNav()
const at = <T,>(key: string) => pick<T>(fm.value[key], clicks.value)

const model = new URLSearchParams(location.search).get('model') ?? 'Wouter 5.5'
const outputStyle = computed(() => at<string>('outputStyle') ?? 'default')
const branch = computed(() => at<string>('branch') ?? 'window-1')
const flag = computed(() => at<string>('flag') ?? '')
const flagCls = computed(() => at<string>('flagCls') ?? '')
const frozen = computed(() => !!at('frozen'))

// Slides without a ctx keep the previous reading; null blanks it (after /compact).
const target = ref<number | null>(12)
watch([fm, clicks], () => {
  const v = at<number | null>('ctx')
  if (v !== undefined)
    target.value = v
}, { immediate: true })

const shown = useTransition(computed(() => target.value ?? 0), { duration: 900 })
const pct = computed(() => Math.round(shown.value))
</script>

<template>
  <div class="statusline" :class="{ frozen }">
    <span class="sl-model">◆ <b>{{ model }}</b></span>
    <span class="sl-sep">│</span>
    <span class="sl-style">✎ {{ outputStyle }}</span>
    <span class="sl-sep">│</span>
    <span>~/talks/memento</span>
    <span class="sl-sep">│</span>
    <span>⎇ {{ branch }}</span>
    <span class="sl-sep">│</span>
    <span class="sl-ctx">ctx
      <span class="sl-bar">
        <i :class="ctxColor(pct)" :style="{ width: target === null ? '0%' : `${shown}%` }" />
        <em class="tick dumb" title="dumb zone ≈ 33%" /><em class="tick land" title="land the plane: 40%" />
      </span>
      <b :class="target === null ? '' : ctxColor(pct)">{{ target === null ? '—' : `${pct}%` }}</b>
    </span>
    <span class="sl-flag" :class="flagCls">{{ flag }}</span>
  </div>
</template>
