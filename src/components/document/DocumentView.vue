<template>
  <DocumentPanel />
  <DocumentSearch class="document-view__search" />
  <DocumentSorted class="document-view__sorted" />
  <DocumentUnsorted class="document-view__unsorted" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.document-view {
  &__search {
    margin-top: 23px;
    max-width: 564px;
  }

  &__sorted {
    margin-top: 19px;
    max-width: 1190px;
  }

  &__unsorted {
    margin-top: 14px;
    max-width: 1190px;
  }
}
</style>
