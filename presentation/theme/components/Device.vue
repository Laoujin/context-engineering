<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

defineProps<{ still: string, focus?: string, color?: boolean, cap: string, was: string, fix: string }>()

const { $clicks } = useSlideContext()
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="device">
    <Polaroid :w="620" :h="440" :r="-2" class="pin" :cap="cap">
      <div class="device-photo" :class="{ color }" :style="{ backgroundImage: `url(${base}stills/${still})`, backgroundPosition: focus ?? 'center' }" />
      <slot name="photo" />
    </Polaroid>
    <div class="device-lines">
      <div class="device-name">
        <span class="struck" :class="{ on: $clicks >= 1 }">{{ was }}<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M-4 88 L104 14" /></svg></span><span class="edit-ins name d1" :class="{ on: $clicks >= 1 }">&nbsp;{{ fix }}</span>
      </div>
      <slot />
    </div>
  </div>
</template>
