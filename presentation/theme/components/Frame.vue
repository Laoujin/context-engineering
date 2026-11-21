<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'
import { pick } from '../statusline'

const { $frontmatter: fm, $clicks } = useSlideContext()
const monoWindow2 = new URLSearchParams(location.search).get('mono') === 'window2'

const filter = computed(() => {
  if (pick(fm.sepia, $clicks.value))
    return 'sepia'
  if (pick(fm.bw, $clicks.value) || (monoWindow2 && pick(fm.branch, $clicks.value) === 'window-2'))
    return 'bw'
  return ''
})
</script>

<template>
  <div class="slidev-layout memento" :class="filter">
    <slot />
    <div class="grain" />
  </div>
</template>
