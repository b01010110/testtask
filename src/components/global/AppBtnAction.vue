<template>
  <v-btn class="app-btn-action" icon flat>
    <SvgIcon v-if="svgIcon" :name="svgIcon" />
  </v-btn>
</template>

<script setup lang="ts">
interface AppBtnActionProps {
  svgIcon?: string
}

withDefaults(defineProps<AppBtnActionProps>(), {
  svgIcon: '',
})
</script>

<style scoped lang="scss">
.app-btn-action {
  width: 26px !important;
  height: 26px !important;

  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
