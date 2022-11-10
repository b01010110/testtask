import { computed } from 'vue'
import { cloneDeep } from 'lodash-es'
import { useGlobalState } from '@/store'

export function useSearch() {
  const { sorted, unsorted, search } = useGlobalState()

  const documentGroups = computed({
    get() {
      if (search.value) {
        const searchValue = search.value.toLowerCase()
        return cloneDeep(sorted.value).filter((group) => {
          const isGroupNameIncluded = group.name.toLowerCase().includes(searchValue)
          if (isGroupNameIncluded) {
            return true
          } else {
            group.documents = group.documents.filter((document) => document.name.toLowerCase().includes(searchValue))
            return group.documents.length
          }
        })
      } else {
        return sorted.value
      }
    },
    set(value) {
      sorted.value = value
    },
  })

  const documents = computed({
    get() {
      if (search.value) {
        const searchValue = search.value.toLowerCase()
        return cloneDeep(unsorted.value).filter((document) => document.name.toLowerCase().includes(searchValue))
      } else {
        return unsorted.value
      }
    },
    set(value) {
      unsorted.value = value
    },
  })

  const isSortDisabled = computed(() => !!search.value)

  return { documentGroups, documents, isSortDisabled }
}
