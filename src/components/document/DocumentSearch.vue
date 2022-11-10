<template>
  <AppSearchInput v-model="search" />
</template>

<script setup lang="ts">
import { useGlobalState } from '@/store'

const { search } = useGlobalState()
</script>

<style scoped lang="scss"></style>
