<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Frame class="scene">
    <header v-if="fm.kicker || fm.title">
      <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
      <h2 v-if="fm.title" v-html="fm.title" />
    </header>
    <div class="scene-body">
      <slot />
    </div>
  </Frame>
</template>
