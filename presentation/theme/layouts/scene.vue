<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm, $clicks } = useSlideContext()
</script>

<template>
  <Frame class="scene">
    <header v-if="fm.kicker || fm.title">
      <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
      <h2 v-if="fm.title" v-html="fm.title" />
      <div v-if="fm.subtitle" class="subtitle hand slidev-vclick-target" :class="{ 'slidev-vclick-hidden': $clicks < (fm.subtitleAt ?? 0) }">{{ fm.subtitle }}</div>
    </header>
    <div class="scene-body">
      <slot />
    </div>
  </Frame>
</template>
