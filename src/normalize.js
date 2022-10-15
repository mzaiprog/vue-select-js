import { reactive, computed, toRef, watchEffect } from 'vue'
// console.log('normalize.js:')
const createComputedForGetterFunction = maybePathFunc =>
    computed(() => {
        // console.log('createComputedForGetterFunction.maybePathFunc:', {
        //     maybePathFunc: maybePathFunc,
        //     typeof: typeof maybePathFunc.value,
        // })
        return typeof maybePathFunc.value === 'function'
            ? maybePathFunc.value
            : typeof maybePathFunc.value === 'string'
            ? option => {
                  if (option) {
                      //   console.log('option:', option)
                      return maybePathFunc.value.split('.').reduce((value, key) => {
                          //   console.log('value:', value)
                          return value[key]
                      }, option)
                  } else return null
              }
            : option => option
    })

export default props => {
    const normalized = reactive({
        labelBy: null,
        valueBy: null,
        disabledBy: null,
        groupBy: null,
        min: null,
        max: null,
        options: null,
    })

    const labelBy = createComputedForGetterFunction(toRef(props, 'labelBy'))
    watchEffect(() => (normalized.labelBy = labelBy.value))
    const valueBy = createComputedForGetterFunction(toRef(props, 'valueBy'))
    watchEffect(() => (normalized.valueBy = valueBy.value))
    const disabledBy = createComputedForGetterFunction(toRef(props, 'disabledBy'))
    watchEffect(() => (normalized.disabledBy = disabledBy.value))
    const groupBy = createComputedForGetterFunction(toRef(props, 'groupBy'))
    watchEffect(() => (normalized.groupBy = groupBy.value))

    const min = computed(() => (props.multiple ? props.min : Math.min(1, props.min)))
    watchEffect(() => (normalized.min = min.value))
    const max = computed(() => (props.multiple ? props.max : 1))
    watchEffect(() => (normalized.max = max.value))

    watchEffect(() => (normalized.options = props.options))

    return normalized
}
