<template>
  <div class="document-unsorted">
    <draggable
      v-model="documents"
      group="documents"
      item-key="id"
      handle=".document-unsorted__sortable-handle"
      ghost-class="document-sortable-ghost"
      drag-class="document-sortable-drag"
      :force-fallback="true"
      :ghost-behavior="true"
      :disabled="isSortDisabled"
    >
      <template #item="{ element }: { element: Document }">
        <DocumentDocument
          class="document-unsorted__document"
          :document="element"
          :is-sort-disabled="isSortDisabled"
          drag-handle-class="document-unsorted__sortable-handle"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useSearch } from '@/composables/search'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type Document from '@/classes/Document'
import draggable from 'vuedraggable'

const { documents, isSortDisabled } = useSearch()
</script>

<style scoped lang="scss">
.document-unsorted {
  &__document {
    margin-top: -1px;

    &:first-of-type {
      margin-top: 0;
    }
  }

  :deep(.sortable-swap-highlight) {
    height: 5px;
    background-color: #0066ff;
  }
}
</style>
