<template>
  <div class="document-sorted">
    <DocumentGroups v-model="groups" class="document-sorted__groups" :multiple="multiple">
      <draggable
        v-model="documentGroups"
        item-key="id"
        handle=".document-sorted__group-sortable-handle"
        ghost-class="document-group-sortable-ghost"
        drag-class="document-group-sortable-drag"
        :force-fallback="true"
        :ghost-behavior="true"
        :disabled="isSortDisabled"
      >
        <template #item="{ element }: { element: DocumentGroupClass }">
          <DocumentGroup
            class="document-sorted__group"
            :value="element.id.toString()"
            :document-group="element"
            :is-sort-disabled="isSortDisabled"
            drag-handle-class="document-sorted__group-sortable-handle"
          >
            <draggable
              v-model="element.documents"
              item-key="id"
              group="documents"
              handle=".document-sorted__document-sortable-handle"
              ghost-class="document-sortable-ghost"
              drag-class="document-sortable-drag"
              :force-fallback="true"
              :ghost-behavior="true"
              :disabled="isSortDisabled"
            >
              <template #item="{ element: element2 }: { element: DocumentClass }">
                <DocumentDocument
                  class="document-sorted__document"
                  :document="element2"
                  :is-sort-disabled="isSortDisabled"
                  drag-handle-class="document-sorted__document-sortable-handle"
                />
              </template>
            </draggable>
          </DocumentGroup>
        </template>
      </draggable>
    </DocumentGroups>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSearch } from '@/composables/search'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type DocumentGroupClass from '@/classes/DocumentGroup'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type DocumentClass from '@/classes/Document'
import draggable from 'vuedraggable'

const { documentGroups, isSortDisabled } = useSearch()

const multiple = ref(true)
const groups = multiple.value ? ref<string[]>([]) : ref<string>('')

const groupsValue = documentGroups.value
  .filter((documentGroup) => documentGroup.isExpanded)
  .map((documentGroup) => documentGroup.id.toString())

groups.value = multiple.value ? groupsValue : groupsValue[0] ?? ''
</script>

<style scoped lang="scss">
.document-sorted {
  &__groups {
    display: block;

    :deep(.sortable-swap-highlight) {
      height: 5px;
      background-color: #0066ff;
    }
  }

  &__group {
    margin-top: -1px;

    &:first-of-type {
      margin-top: 0;
    }

    &.v-expansion-panel--active + div.v-expansion-panel {
      margin-top: -2px;
    }

    :deep(.v-expansion-panel-text__wrapper > div:empty) {
      padding-bottom: 15px;
    }
  }

  &__document {
    margin-top: -1px;
  }
}
</style>
