<template>
  <v-expansion-panel class="document-group" ref="expansionPanel" rounded="0" elevation="0">
    <v-expansion-panel-title hide-actions readonly>
      <AppBtnToggle class="parent-icon-color--blue" :is-expanded="isExpanded" @click="toggle" />
      <div class="document-group__name">{{ documentGroup.name }}</div>
      <div v-if="documentGroup.circles.length" class="document-group__circles">
        <div
          v-for="circle in documentGroup.circles"
          :key="circle.id"
          class="document-group__circle"
          :class="[`circle-color--${circle.color}`]"
        ></div>
      </div>
      <div v-if="documentGroup.info" class="document-group__info">{{ documentGroup.info }}</div>
      <v-spacer v-else />
      <div class="document-group__actions">
        <AppBtnAction class="document-group__action parent-svg-icon-color--grey" svg-icon="pencil" />
        <AppBtnAction class="document-group__action parent-svg-icon-color--pink" svg-icon="trash-can" />
        <AppBtnAction
          class="document-group__action document-group__action-move parent-svg-icon-color--grey parent-svg-icon-color--blue-hover cursor-move"
          :class="[dragHandleClass ?? '']"
          svg-icon="move"
        />
      </div>
    </v-expansion-panel-title>
    <v-expansion-panel-text><slot></slot></v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import type { VExpansionPanel } from 'vuetify/lib/components/VExpansionPanel/index'
import type DocumentGroup from '@/classes/DocumentGroup'
import { documentGroupsValueKey, documentGroupsOpenKey, documentGroupsCloseKey } from '@/keys'

interface DocumentGroupProps {
  documentGroup: DocumentGroup
  dragHandleClass?: string
}

defineProps<DocumentGroupProps>()

const expansionPanel = ref<VExpansionPanel | null>(null)
const groups = inject(documentGroupsValueKey)
const open = inject(documentGroupsOpenKey)
const close = inject(documentGroupsCloseKey)

const isExpanded = computed(() => {
  if (expansionPanel.value === null || groups === undefined) return false

  if (Array.isArray(groups.value)) {
    if (groups.value.includes(expansionPanel.value.value)) {
      return true
    } else {
      return false
    }
  } else {
    if (expansionPanel.value.value === groups.value) {
      return true
    } else {
      return false
    }
  }
})

function toggle() {
  if (isExpanded.value) {
    close?.(expansionPanel.value?.value)
  } else {
    open?.(expansionPanel.value?.value)
  }
}
</script>

<style scoped lang="scss">
.document-group {
  &.v-expansion-panel:not(:first-child)::after {
    display: none;
  }

  &.v-expansion-panel--active + .v-expansion-panel {
    margin-top: 0;
  }

  :deep(.v-expansion-panel-title) {
    justify-content: flex-start;
    align-items: center;
    padding: 10px 8px 10px 16px;
    border: 1px solid #dfe4ef;
    min-height: 46px;
    background-color: #fff;
    cursor: auto;
    user-select: text;

    .v-expansion-panel-title__overlay {
      display: none;
    }
  }

  :deep(.v-expansion-panel-text__wrapper) {
    padding: 0 0 0 16px;
  }

  &__name {
    margin-left: 14px;
    font-family: 'Fira Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 108%;
    color: #000;
    white-space: nowrap;
  }

  &__circles {
    display: flex;
    margin-left: 16px;
  }

  &__circle {
    margin-right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &:last-of-type {
      margin-right: 0;
    }

    &:hover {
      border: 1px solid #000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }

  &__info {
    flex-grow: 1;
    position: relative;
    top: 1px;
    margin-left: 16px;
    font-family: 'Fira Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 108%;
    color: #8e9cbb;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;

    &::after {
      position: absolute;
      width: 20px;
      top: 0;
      bottom: 0;
      right: 0;
      content: '';
      background: linear-gradient(270deg, #fff 0%, rgba(255, 255, 255, 0) 50%);
    }
  }

  &__actions {
    display: flex;
    margin-left: 50px;
  }

  &__action {
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
