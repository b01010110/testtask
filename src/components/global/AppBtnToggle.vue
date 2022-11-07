<template>
  <v-btn class="app-btn-toggle" :class="{ 'app-btn-toggle--expanded': isExpanded }" icon="mdi-chevron-down" flat />
</template>

<script setup lang="ts">
interface AppBtnToggleProps {
  isExpanded?: boolean
}

withDefaults(defineProps<AppBtnToggleProps>(), {
  isExpanded: false,
})
</script>

<style scoped lang="scss">
.app-btn-toggle {
  width: 22px !important;
  height: 22px !important;
  border: 1px solid #d3d8df;
  font-size: 11px;

  :deep(i) {
    position: relative;
    top: 1px;
    transition: all 0.3s;
  }

  &--expanded {
    :deep(i) {
      top: -1px;
      transform: rotate(180deg);
    }
  }
}
</style>
