<script setup lang="ts">
const props = withDefaults(defineProps<{
  cap?: string
  w?: number
  h?: number
  r?: number
  x?: number
  y?: number
}>(), { cap: '', w: 300, h: 240, r: 0 })

const style = {
  '--r': `${props.r}deg`,
  '--pw': `${props.w}px`,
  '--ph': `${props.h}px`,
  ...(props.x === undefined ? {} : { position: 'absolute', left: `${props.x}px`, top: `${props.y}px` }),
}
</script>

<template>
  <figure class="polaroid" :style="style">
    <div class="photo">
      <slot />
    </div>
    <figcaption v-html="cap" />
  </figure>
</template>
