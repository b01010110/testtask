<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="fill" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SvgIconProps {
  prefix?: string
  name: string
  fill?: string
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  fill: 'none',
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
