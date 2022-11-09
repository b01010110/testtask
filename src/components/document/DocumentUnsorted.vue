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
    >
      <template #item="{ element }: { element: Document }">
        <DocumentDocument
          class="document-unsorted__document"
          drag-handle-class="document-unsorted__sortable-handle"
          :document="element"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from '@/store'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type Document from '@/classes/Document'
import draggable from 'vuedraggable'

const { unsorted: documents } = useGlobalState()
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
