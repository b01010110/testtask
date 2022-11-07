import type { Ref, InjectionKey } from 'vue'

export const documentGroupsValueKey = Symbol() as InjectionKey<Ref<string[] | string>>
export const documentGroupsOpenKey = Symbol() as InjectionKey<(value: string) => void>
export const documentGroupsCloseKey = Symbol() as InjectionKey<(value?: string) => void>
