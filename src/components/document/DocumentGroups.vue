<template>
  <v-expansion-panels v-model="data" class="document-groups" variant="accordion" :multiple="multiple">
    <slot></slot>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useVModel } from '@vueuse/core'
import { documentGroupsValueKey, documentGroupsOpenKey, documentGroupsCloseKey } from '@/keys'

interface DocumentGroupsProps {
  modelValue: string[] | string
  multiple?: boolean
}

interface DocumentGroupsEmits {
  (e: 'update:modelValue', modelValue: string[] | string): void
}

const props = withDefaults(defineProps<DocumentGroupsProps>(), {
  multiple: false,
})
const emit = defineEmits<DocumentGroupsEmits>()

const data = useVModel(props, 'modelValue', emit)

function open(value: string) {
  if (props.multiple) {
    ;(data.value as string[]).push(value)
  } else {
    data.value = value
  }
}

function close(value?: string) {
  if (props.multiple) {
    data.value = (data.value as string[]).filter((val) => val !== value)
  } else {
    data.value = ''
  }
}

provide(documentGroupsValueKey, data)
provide(documentGroupsOpenKey, open)
provide(documentGroupsCloseKey, close)
</script>

<style scoped lang="scss"></style>
