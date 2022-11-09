import Sortable from 'sortablejs'
import type { Options } from 'sortablejs'

//TODO if we drag an element from another list then it isn't attached to the beginning.
//TODO Work on the animation.

interface This {
  sortable: Sortable
  options: Options
}

declare module 'sortablejs' {
  interface Utils {
    index: (el: HTMLElement, selector?: string) => number
  }

  interface Options {
    ghostBehaviorClass: string
  }
}

export class GhostBehavior {
  public static pluginName = 'ghostBehavior'

  public defaults = {
    ghostBehaviorClass: 'sortable-swap-highlight',
  }

  public static flag = false
  public static lastTarget: HTMLElement | null = null

  public static createGhostElement(ghostBehaviorClass: string) {
    const divEl = document.createElement('div')
    divEl.classList.add(ghostBehaviorClass)
    return divEl
  }

  public static ghostElement: HTMLDivElement | null = null

  public static getTargetIndex(dragEl: HTMLElement, target: HTMLElement): number {
    let targetIndex
    const dragElParent = dragEl.parentNode
    const targetParent = target.parentNode

    if (dragElParent === targetParent) {
      const dragElIndex = Sortable.utils.index(dragEl)
      targetIndex = Sortable.utils.index(target)
      if (dragElIndex < targetIndex) targetIndex++
    } else {
      targetIndex = Sortable.utils.index(target)
      targetIndex++
    }

    return targetIndex
  }

  public static clear() {
    GhostBehavior.flag = false
    GhostBehavior.lastTarget = null
    GhostBehavior.ghostElement?.remove()
    GhostBehavior.ghostElement = null
  }

  public dragOverValid(this: This, { dragEl, target, onMove, completed, changed, cancel }: any) {
    const el = this.sortable.el
    const options = this.options

    if (target && target !== el) {
      if (onMove(target) !== false && !GhostBehavior.flag) {
        GhostBehavior.flag = true
        GhostBehavior.lastTarget = target
        GhostBehavior.ghostElement = GhostBehavior.createGhostElement(options.ghostBehaviorClass)

        const targetIndex = GhostBehavior.getTargetIndex(dragEl, target)

        const targetParent = target.parentNode
        targetParent.insertBefore(GhostBehavior.ghostElement, targetParent.children[targetIndex])
      }
    }

    if (target && target === el) {
      if (onMove(target) !== false && !GhostBehavior.flag) {
        GhostBehavior.flag = true
        GhostBehavior.lastTarget = target
        GhostBehavior.ghostElement = GhostBehavior.createGhostElement(options.ghostBehaviorClass)

        target.insertBefore(GhostBehavior.ghostElement, target.children[0])
      }
    }

    if (GhostBehavior.lastTarget !== target) {
      GhostBehavior.clear()
    }

    changed()
    completed(true)
    cancel()
  }

  public dragOverCompleted({ insertion }: any) {
    if (!insertion) GhostBehavior.clear()
  }

  public drop(this: This, { dragEl, activeSortable, putSortable }: any) {
    const toSortable = putSortable || this.sortable

    if (GhostBehavior.ghostElement !== null) {
      toSortable.captureAnimationState()
      if (toSortable !== activeSortable) activeSortable.captureAnimationState()

      const targetParent = GhostBehavior.ghostElement.parentNode
      targetParent?.replaceChild(dragEl, GhostBehavior.ghostElement)

      toSortable.animateAll()
      if (toSortable !== activeSortable) activeSortable.animateAll()
    }
  }

  public nulling() {
    GhostBehavior.clear()
  }
}
