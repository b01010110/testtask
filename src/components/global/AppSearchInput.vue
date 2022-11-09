<template>
  <v-text-field
    ref="textField"
    class="app-search-input"
    placeholder="Поиск"
    variant="underlined"
    hide-details
    persistent-clear
    clearable
  >
    <template #prepend-inner>
      <SvgIcon class="svg-icon-color--grey" name="magnifier" />
    </template>

    <template #clear>
      <SvgIcon class="svg-icon-color--pink" name="close" @click="clear" />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VTextField } from 'vuetify/lib/components/VTextField/index'

const textField = ref<VTextField | null>(null)

function clear() {
  textField.value?.reset()
}
</script>

<style scoped lang="scss">
.app-search-input {
  :deep(.v-field__outline) {
    --v-field-border-opacity: 1;

    &::before {
      border-color: #bfc9e0;
    }

    &::after {
      transform: scaleX(0) !important;
    }
  }

  :deep(.v-field--focused .v-field__outline) {
    &::before {
      border-color: #0066ff;
    }
  }

  :deep(.v-field__prepend-inner svg) {
    position: relative;
    left: -4px;
    top: -3px;
    width: 24px;
    height: 24px;
  }

  :deep(.v-field__clearable) {
    margin-inline-end: 0;

    svg {
      position: relative;
      right: -7px;
      top: -3px;
      width: 24px;
      height: 24px;
    }
  }

  &.v-input--density-default {
    --v-input-padding-top: 0;

    :deep(.v-field--variant-underlined) {
      --v-input-control-height: 30px;
      --v-field-padding-bottom: 10px;
    }
  }

  :deep(.v-field__input) {
    @include text;
    font-size: 15px;
    color: #000;

    &::placeholder {
      @include text;
      font-size: 15px;
      font-style: italic;
      font-weight: 300;
      color: #8e9cbb;
      opacity: 1;
    }
  }

  :deep(.v-field.v-field--prepended) {
    --v-field-padding-start: 4px;
  }
}
</style>
