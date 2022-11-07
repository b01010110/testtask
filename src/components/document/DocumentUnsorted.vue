<template>
  <div class="document-unsorted">
    <DocumentDocument v-for="document in documents" :key="document.id" :document="document" />
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from '@/store'

const { unsorted: documents } = useGlobalState()
</script>

<style scoped lang="scss">
.document-unsorted {
  & > div {
    margin-top: -1px;

    &:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
