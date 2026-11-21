<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

defineProps<{ still: string, focus?: string, right?: boolean, was: string, wasSub: string, fix: string, fixSub: string }>()

const { $clicks } = useSlideContext()
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="skin-still" :class="{ right }" :style="{ backgroundImage: `url(${base}stills/${still})`, backgroundPosition: focus ?? 'center' }" />
  <div class="skin-title" :class="{ right }">
    <div class="kicker">how does Lenny cope?</div>
    <div class="flap" :class="{ flipped: $clicks >= 1 }">
      <div class="flap-face front"><div class="device-name">{{ was }}</div><div class="flap-sub" v-html="wasSub" /></div>
      <div class="flap-face back"><div class="device-name hand amber-t">{{ fix }}</div><div class="flap-sub" v-html="fixSub" /></div>
    </div>
  </div>
</template>
