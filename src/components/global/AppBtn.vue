<template>
  <v-btn class="app-btn" :class="{ 'app-btn-icon': !!svgIcon }" flat>
    <SvgIcon v-if="svgIcon" :name="svgIcon" />
    <slot></slot>
  </v-btn>
</template>

<script setup lang="ts">
interface AppBtnProps {
  svgIcon?: string
}

withDefaults(defineProps<AppBtnProps>(), {
  svgIcon: '',
})
</script>

<style scoped lang="scss">
.app-btn {
  border: 1px solid #d3d8df;
  height: 30px !important;
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 108%;
  color: #000;
  text-transform: none;
  letter-spacing: 0;

  &:not(.v-btn--icon) {
    padding: 0 20px 0 20px;
    border-radius: 15px;
  }

  &.v-btn--icon {
    width: 30px !important;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }

  &-icon {
    padding-left: 5px !important;
  }
}
</style>
