<template>
  <div class="document-sorted">
    <DocumentGroups v-model="groups" :multiple="multiple">
      <DocumentGroup
        v-for="documentGroup in documentGroups"
        :key="documentGroup.id"
        :value="documentGroup.id.toString()"
        :document-group="documentGroup"
      >
        <DocumentDocument v-for="document in documentGroup.documents" :key="document.id" :document="document" />
      </DocumentGroup>
    </DocumentGroups>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type DocumentGroup from '@/classes/DocumentGroup'
import { useGlobalState } from '@/store'

const { sorted: documentGroups } = useGlobalState()

const multiple = ref(true)
const groups = multiple.value ? ref<string[]>([]) : ref<string>('')

const groupsValue = documentGroups.value
  .filter((documentGroup) => documentGroup.isExpanded)
  .map((documentGroup) => documentGroup.id.toString())

groups.value = multiple.value ? groupsValue : groupsValue[0] ?? ''
</script>

<style scoped lang="scss"></style>
