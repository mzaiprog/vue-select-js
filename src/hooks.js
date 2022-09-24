import { watchEffect, computed } from 'vue'

export const usePointer = (options, highlightedOriginalIndex) => {
  const pointerForward = () => {
    if (isSomeSelectable.value === false) return
    if (highlightedOriginalIndex.value === null) return
    let tempOriginalIndex = highlightedOriginalIndex.value + 1
    let safeCount = 0
    while (tempOriginalIndex !== highlightedOriginalIndex.value && safeCount++ < options.value.length) {
      if (options.value.length <= tempOriginalIndex) tempOriginalIndex = 0
      if (pointerSet(tempOriginalIndex)) break
      ++tempOriginalIndex
    }
  }
  const pointerBackward = () => {
    if (isSomeSelectable.value === false) return
    if (highlightedOriginalIndex.value === null) return
    let tempOriginalIndex = highlightedOriginalIndex.value - 1
    let safeCount = 0
    while (tempOriginalIndex !== highlightedOriginalIndex.value && safeCount++ < options.value.length) {
      if (tempOriginalIndex < 0) tempOriginalIndex = options.value.length - 1
      if (pointerSet(tempOriginalIndex)) break
      --tempOriginalIndex
    }
  }

  const originalIndexToOption = computed(() => {
    return options.value.reduce((acc, option) => {
      return Object.assign(acc, { [option.originalIndex]: option })
    }, {})
  })
  const pointerSet = (originalIndex) => {
    const option = originalIndexToOption.value[originalIndex]
    if (option === undefined) return false
    if (isSelectable(option) === false) return false
    highlightedOriginalIndex.value = originalIndex
    return true
  }

  const isSelectable = (option) => !option.disabled && !option.hidden && option.visible
  const isSomeSelectable = computed(() => options.value.some(option => isSelectable(option)))

  watchEffect(() => {
    if (isSomeSelectable.value === false) highlightedOriginalIndex.value = null
    if (highlightedOriginalIndex.value !== null && options.value.length <= highlightedOriginalIndex.value) {
      for (const option of options.value.reverse()) {
        if (pointerSet(option.originalIndex)) break
      }
    }
    if (
      highlightedOriginalIndex.value === null ||
      isSelectable(options.value[highlightedOriginalIndex.value]) === false
    ) {
      for (const option of options.value) {
        if (pointerSet(option.originalIndex)) break
      }
    }
  })

  return {
    pointerForward,
    pointerBackward,
    pointerSet,
  }
}
