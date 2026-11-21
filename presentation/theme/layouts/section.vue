<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <Frame class="section">
    <div class="num">{{ fm.n }}</div>
    <h1>{{ fm.title }}</h1>
    <div class="subtitle">{{ fm.subtitle }}</div>
    <slot />
  </Frame>
</template>
