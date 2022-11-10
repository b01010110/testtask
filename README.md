# Documents

## Task description:

- Make the layout. (without adaptive)
- Adding functionality:
  - Substring search into a name of groups and documents.
  - Sorting groups and documents (between groups).

## Technology:

- Vue 3 composition API + Typescript
- Vuetify 3 ([Introduction page](https://next.vuetifyjs.com/en/introduction/why-vuetify/))
- VueUse ([Home page](https://vueuse.org/))
- Vuedraggable ([Github](https://github.com/SortableJS/vue.draggable.next))
- Sortablejs ([Github](https://github.com/SortableJS/Sortable))

## Gotchas:

For sorting is used vuedraggable component. It's necessary to change the default behavior of sorting. So I've written the GhostBehavior plugin of sortablejs.

Some gotchas:

- The animation works incorrectly. ([Issue #188](https://github.com/SortableJS/vue.draggable.next/issues/188), [Issue #180](https://github.com/SortableJS/vue.draggable.next/issues/180), [Issue #149](https://github.com/SortableJS/vue.draggable.next/issues/149))
- If we drag an element from another list then it isn't attached to the beginning. (I'll work on it a bit later)
