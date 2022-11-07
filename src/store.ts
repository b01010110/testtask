import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import DocumentGroup from '@/classes/DocumentGroup'
import DocumentCircle from '@/classes/DocumentCircle'
import Document from '@/classes/Document'

export const useGlobalState = createGlobalState(() => {
  const sorted = ref([
    new DocumentGroup({
      id: 1,
      name: 'Обязательные для всех',
      info: 'Документы, обязательные для всех сотрудников без исключения',
      circles: [new DocumentCircle(1, 'pink'), new DocumentCircle(2, 'yellow'), new DocumentCircle(3, 'orange')],
      isExpanded: true,
      documents: [
        new Document({
          id: 1,
          name: 'Паспорт',
          info: 'Для всех',
          isRequired: true,
          circles: [new DocumentCircle(1, 'light-blue')],
        }),
        new Document({
          id: 2,
          name: 'ИНН',
          info: 'Для всех',
          isRequired: true,
        }),
      ],
    }),
    new DocumentGroup({
      id: 2,
      name: 'Обязательные для трудоустройства',
      info: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
      documents: [
        new Document({
          id: 3,
          name: 'Снилс',
          info: 'Для всех',
        }),
      ],
      isExpanded: false,
    }),
    new DocumentGroup({
      id: 3,
      name: 'Специальные',
    }),
  ])

  const unsorted = ref([
    new Document({
      id: 4,
      name: 'Тестовое задание кандидата',
      info: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
    }),
    new Document({
      id: 5,
      name: 'Трудовой договор',
      circles: [new DocumentCircle(1, 'blue'), new DocumentCircle(2, 'grey')],
    }),
    new Document({
      id: 6,
      name: 'Мед. книжка',
    }),
  ])

  return { sorted, unsorted }
})
