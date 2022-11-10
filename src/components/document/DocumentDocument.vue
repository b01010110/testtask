<template>
  <div class="document-document">
    <div class="document-document__name">{{ document.name }}</div>
    <div v-if="document.circles.length" class="document-document__circles">
      <div
        v-for="circle in document.circles"
        :key="circle.id"
        class="document-document__circle"
        :class="[`circle-color--${circle.color}`]"
      ></div>
    </div>
    <div v-if="document.isRequired" class="document-document__required">Обязательный</div>
    <div v-if="document.info" class="document-document__info">{{ document.info }}</div>
    <v-spacer v-else />
    <div class="document-document__actions">
      <AppBtnAction class="document-document__action parent-svg-icon-color--grey" svg-icon="pencil" />
      <AppBtnAction class="document-document__action parent-svg-icon-color--pink" svg-icon="trash-can" />
      <AppBtnAction
        class="document-document__action document-document__action-move parent-svg-icon-color--grey"
        :class="[
          dragHandleClass ?? '',
          isSortDisabled ? 'cursor-not-allowed' : 'parent-svg-icon-color--blue-hover cursor-move',
        ]"
        svg-icon="move"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type Document from '@/classes/Document'

interface DocumentDocumentProps {
  document: Document
  dragHandleClass?: string
  isSortDisabled?: boolean
}

withDefaults(defineProps<DocumentDocumentProps>(), {
  isSortDisabled: false,
})
</script>

<style scoped lang="scss">
.document-document {
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-right: 8px;
  height: 35px;
  border: 1px solid #dfe4ef;
  background-color: #fff;

  &__name {
    @include text;
    font-size: 13px;
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

  &__required {
    margin-left: 16px;
    @include text;
    font-size: 11px;
    color: #ff238d;
  }

  &__info {
    flex-grow: 1;
    position: relative;
    margin-left: 16px;
    @include text;
    font-size: 11px;
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
