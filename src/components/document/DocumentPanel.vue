<template>
  <div class="document-panel">
    <div class="document-panel__title">Документы</div>
    <v-spacer />
    <div class="document-panel__buttons">
      <AppBtn class="parent-svg-icon-color--grey" svg-icon="bookmark" icon></AppBtn>
      <AppBtn class="parent-svg-icon-color--blue" svg-icon="plus">Новый тип</AppBtn>
      <AppBtn class="parent-svg-icon-color--blue" svg-icon="plus">Новый документ</AppBtn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.document-panel {
  display: flex;

  &__title {
    font-family: 'Fira Sans', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 108%;
    color: #000;
  }

  &__buttons > button {
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
