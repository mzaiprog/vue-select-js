'use strict';

var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var script$2 = {
  inheritAttrs: false,
  name: 'vue-input',
  props: {
    autocomplete: {
      required: false,
      type: String
    },
    modelValue: {
      required: true,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    },
    disabled: {
      required: true,
      type: Boolean
    },
    tabindex: {
      required: true,
      type: Number
    },
    autofocus: {
      required: true,
      type: Boolean
    },
    comboboxUid: {
      required: true,
      type: Number
    }
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur', 'escape'],
  setup: function setup(props, context) {
    var handleInput = function handleInput(event) {
      context.emit('input', event);
      context.emit('update:modelValue', event.target.value);
    };
    var handleChange = function handleChange(event) {
      context.emit('change', event);
      context.emit('update:modelValue', event.target.value);
    };
    var handleFocus = function handleFocus(event) {
      context.emit('focus', event);
    };
    var handleBlur = function handleBlur(event) {
      context.emit('blur', event);
    };
    var input = vue.ref(null);
    var handleEscape = function handleEscape(event) {
      input.value.blur();
      context.emit('escape', event);
    };
    vue.onMounted(function () {
      if (props.autofocus) input.value.focus();
    });
    vue.onUpdated(function () {
      if (props.autofocus) input.value.focus();
    });
    return {
      handleInput: handleInput,
      handleChange: handleChange,
      handleFocus: handleFocus,
      handleBlur: handleBlur,
      input: input,
      handleEscape: handleEscape
    };
  }
};

var _hoisted_1$2 = {
  "class": "vue-input"
};
var _hoisted_2$2 = ["autocomplete", "modelValue", "placeholder", "disabled", "tabindex", "autofocus", "aria-controls", "aria-labelledby"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.renderSlot(_ctx.$slots, "prepend"), vue.createElementVNode("input", {
    ref: "input",
    autocomplete: $props.autocomplete,
    modelValue: $props.modelValue,
    placeholder: $props.placeholder,
    disabled: $props.disabled,
    onInput: _cache[0] || (_cache[0] = function () {
      return $setup.handleInput && $setup.handleInput.apply($setup, arguments);
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $setup.handleChange && $setup.handleChange.apply($setup, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function () {
      return $setup.handleFocus && $setup.handleFocus.apply($setup, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function () {
      return $setup.handleBlur && $setup.handleBlur.apply($setup, arguments);
    }),
    onKeyup: _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(function () {
      return $setup.handleEscape && $setup.handleEscape.apply($setup, arguments);
    }, ["exact"]), ["esc"])),
    tabindex: $props.tabindex,
    autofocus: $props.autofocus,
    "aria-autocomplete": "list",
    "aria-controls": "vs".concat($props.comboboxUid, "-listbox"),
    "aria-labelledby": "vs".concat($props.comboboxUid, "-combobox")
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$2), vue.renderSlot(_ctx.$slots, "append")]);
}

script$2.render = render$3;
script$2.__file = "src/components/input.vue";

var script$1 = {
  inheritAttrs: false,
  name: 'vue-tags',
  props: {
    modelValue: {
      required: true,
      type: Array,
      validator: function validator(modelValue) {
        return modelValue.every(function (option) {
          return _typeof(option.key) !== undefined && option.label !== undefined && typeof option.selected === 'boolean';
        });
      }
    },
    collapseTags: {
      type: Boolean
    }
  },
  emits: ['click'],
  setup: function setup(props, context) {
    var dataAttrs = vue.inject('dataAttrs');
    var handleClick = function handleClick(event) {
      context.emit('click', event);
    };
    return {
      dataAttrs: dataAttrs,
      handleClick: handleClick
    };
  }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("ul", vue.mergeProps({
    "class": ["vue-tags", {
      collapsed: $props.collapseTags
    }],
    onMousedown: _cache[0] || (_cache[0] = vue.withModifiers(function () {}, ["prevent"])),
    tabindex: "-1",
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.handleClick && $setup.handleClick.apply($setup, arguments);
    })
  }, $setup.dataAttrs), [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, function (option) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
      key: option.key
    }, [!option.group ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 0,
      "class": vue.normalizeClass(["vue-tag", {
        selected: option.selected
      }])
    }, [vue.renderSlot(_ctx.$slots, "default", {
      option: option
    }, function () {
      return [vue.createElementVNode("span", null, vue.toDisplayString(option.label), 1 /* TEXT */)];
    })], 2 /* CLASS */)) : vue.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))], 16 /* FULL_PROPS */);
}

script$1.render = render$2;
script$1.__file = "src/components/tags.vue";

var script = {
  inheritAttrs: false,
  name: 'vue-dropdown',
  props: {
    modelValue: {
      required: true,
      type: Array,
      validator: function validator(modelValue) {
        return modelValue.every(function (option) {
          return _typeof(option.key) !== undefined && option.label !== undefined && typeof option.selected === 'boolean';
        });
      }
    },
    comboboxUid: {
      required: true,
      type: Number
    },
    maxHeight: {
      required: true
    },
    highlightedOriginalIndex: {
      required: true
    }
  },
  emits: ['click-item', 'mouseenter'],
  setup: function setup(props, context) {
    var dataAttrs = vue.inject('dataAttrs');
    var handleClickItem = function handleClickItem(event, option) {
      if (option.disabled) return;
      context.emit('click-item', event, option);
    };
    var handleMouseenter = function handleMouseenter(event, option) {
      context.emit('mouseenter', event, option);
    };
    return {
      dataAttrs: dataAttrs,
      handleClickItem: handleClickItem,
      handleMouseenter: handleMouseenter
    };
  }
};

var _hoisted_1$1 = ["id", "aria-multiselectable", "aria-busy", "aria-disabled"];
var _hoisted_2$1 = ["onClick", "onMouseenter", "id", "aria-selected", "aria-disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("ul", vue.mergeProps({
    "class": "vue-dropdown",
    style: {
      maxHeight: $props.maxHeight + 'px'
    },
    onMousedown: _cache[0] || (_cache[0] = vue.withModifiers(function () {}, ["prevent"]))
  }, $setup.dataAttrs, {
    role: "listbox",
    id: "vs".concat($props.comboboxUid, "-listbox"),
    "aria-multiselectable": $setup.dataAttrs['data-multiple'],
    "aria-busy": $setup.dataAttrs['data-loading'],
    "aria-disabled": $setup.dataAttrs['data-disabled']
  }), [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.modelValue, function (option, index) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
      key: option.key
    }, [option.visible && option.hidden === false ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 0,
      onClick: function onClick($event) {
        return $setup.handleClickItem($event, option);
      },
      "class": vue.normalizeClass(["vue-dropdown-item", {
        selected: option.selected,
        disabled: option.disabled,
        highlighted: option.originalIndex === $props.highlightedOriginalIndex,
        group: option.group
      }]),
      onMouseenter: function onMouseenter($event) {
        return $setup.handleMouseenter($event, option);
      },
      role: "option",
      id: "vs".concat($props.comboboxUid, "-option-").concat(index),
      "aria-selected": option.selected ? true : option.disabled ? undefined : false,
      "aria-disabled": option.disabled
    }, [vue.renderSlot(_ctx.$slots, "default", {
      option: option
    }, function () {
      return [vue.createElementVNode("span", null, vue.toDisplayString(option.label), 1 /* TEXT */)];
    })], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2$1)) : vue.createCommentVNode("v-if", true)], 64 /* STABLE_FRAGMENT */);
  }), 128 /* KEYED_FRAGMENT */))], 16 /* FULL_PROPS */, _hoisted_1$1);
}

script.render = render$1;
script.__file = "src/components/dropdown.vue";

var isSameOption = function isSameOption(option1, option2, _ref) {
  var valueBy = _ref.valueBy;
  return valueBy(option1) === valueBy(option2);
};
var hasOption = function hasOption(options, option, _ref2) {
  var valueBy = _ref2.valueBy;
  return options.some(function (_option) {
    return isSameOption(_option, option, {
      valueBy: valueBy
    });
  });
};
var getOptionByValue = function getOptionByValue(options, value, _ref3) {
  var valueBy = _ref3.valueBy;
  return options.find(function (option) {
    return valueBy(option) === value;
  });
};
var addOption = function addOption(selectedOptions, option, _ref4) {
  var max = _ref4.max,
    valueBy = _ref4.valueBy;
  if (hasOption(selectedOptions, option, {
    valueBy: valueBy
  })) return selectedOptions;
  if (selectedOptions.length >= max) return selectedOptions;
  return selectedOptions.concat(option);
};
var removeOption = function removeOption(selectedOptions, option, _ref5) {
  var min = _ref5.min,
    valueBy = _ref5.valueBy;
  if (hasOption(selectedOptions, option, {
    valueBy: valueBy
  }) === false) return selectedOptions;
  if (selectedOptions.length <= min) return selectedOptions;
  return selectedOptions.filter(function (_option) {
    return isSameOption(_option, option, {
      valueBy: valueBy
    }) === false;
  });
};

// console.log('normalize.js:')
var createComputedForGetterFunction = function createComputedForGetterFunction(maybePathFunc) {
  return vue.computed(function () {
    // console.log('createComputedForGetterFunction.maybePathFunc:', {
    //     maybePathFunc: maybePathFunc,
    //     typeof: typeof maybePathFunc.value,
    // })
    return typeof maybePathFunc.value === 'function' ? maybePathFunc.value : typeof maybePathFunc.value === 'string' ? function (option) {
      if (option) {
        //   console.log('option:', option)
        return maybePathFunc.value.split('.').reduce(function (value, key) {
          //   console.log('value:', value)
          return value[key];
        }, option);
      } else return null;
    } : function (option) {
      return option;
    };
  });
};
var normalize = (function (props) {
  var normalized = vue.reactive({
    labelBy: null,
    valueBy: null,
    disabledBy: null,
    groupBy: null,
    min: null,
    max: null,
    options: null
  });
  var labelBy = createComputedForGetterFunction(vue.toRef(props, 'labelBy'));
  vue.watchEffect(function () {
    return normalized.labelBy = labelBy.value;
  });
  var valueBy = createComputedForGetterFunction(vue.toRef(props, 'valueBy'));
  vue.watchEffect(function () {
    return normalized.valueBy = valueBy.value;
  });
  var disabledBy = createComputedForGetterFunction(vue.toRef(props, 'disabledBy'));
  vue.watchEffect(function () {
    return normalized.disabledBy = disabledBy.value;
  });
  var groupBy = createComputedForGetterFunction(vue.toRef(props, 'groupBy'));
  vue.watchEffect(function () {
    return normalized.groupBy = groupBy.value;
  });
  var min = vue.computed(function () {
    return props.multiple ? props.min : Math.min(1, props.min);
  });
  vue.watchEffect(function () {
    return normalized.min = min.value;
  });
  var max = vue.computed(function () {
    return props.multiple ? props.max : 1;
  });
  vue.watchEffect(function () {
    return normalized.max = max.value;
  });
  vue.watchEffect(function () {
    return normalized.options = props.options;
  });
  return normalized;
});

var usePointer = function usePointer(options, highlightedOriginalIndex) {
  var pointerForward = function pointerForward() {
    if (isSomeSelectable.value === false) return;
    if (highlightedOriginalIndex.value === null) return;
    var tempOriginalIndex = highlightedOriginalIndex.value + 1;
    var safeCount = 0;
    while (tempOriginalIndex !== highlightedOriginalIndex.value && safeCount++ < options.value.length) {
      if (options.value.length <= tempOriginalIndex) tempOriginalIndex = 0;
      if (pointerSet(tempOriginalIndex)) break;
      ++tempOriginalIndex;
    }
  };
  var pointerBackward = function pointerBackward() {
    if (isSomeSelectable.value === false) return;
    if (highlightedOriginalIndex.value === null) return;
    var tempOriginalIndex = highlightedOriginalIndex.value - 1;
    var safeCount = 0;
    while (tempOriginalIndex !== highlightedOriginalIndex.value && safeCount++ < options.value.length) {
      if (tempOriginalIndex < 0) tempOriginalIndex = options.value.length - 1;
      if (pointerSet(tempOriginalIndex)) break;
      --tempOriginalIndex;
    }
  };
  var originalIndexToOption = vue.computed(function () {
    return options.value.reduce(function (acc, option) {
      return Object.assign(acc, _defineProperty({}, option.originalIndex, option));
    }, {});
  });
  var pointerSet = function pointerSet(originalIndex) {
    var option = originalIndexToOption.value[originalIndex];
    if (option === undefined) return false;
    if (isSelectable(option) === false) return false;
    highlightedOriginalIndex.value = originalIndex;
    return true;
  };
  var isSelectable = function isSelectable(option) {
    return !option.disabled && !option.hidden && option.visible;
  };
  var isSomeSelectable = vue.computed(function () {
    return options.value.some(function (option) {
      return isSelectable(option);
    });
  });
  vue.watchEffect(function () {
    if (isSomeSelectable.value === false) highlightedOriginalIndex.value = null;
    if (highlightedOriginalIndex.value !== null && options.value.length <= highlightedOriginalIndex.value) {
      var _iterator = _createForOfIteratorHelper(options.value.reverse()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          if (pointerSet(option.originalIndex)) break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (highlightedOriginalIndex.value === null || isSelectable(options.value[highlightedOriginalIndex.value]) === false) {
      var _iterator2 = _createForOfIteratorHelper(options.value),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _option = _step2.value;
          if (pointerSet(_option.originalIndex)) break;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  });
  return {
    pointerForward: pointerForward,
    pointerBackward: pointerBackward,
    pointerSet: pointerSet
  };
};

var version = "2.10.4";

function escapeRegExp(pattern) {
  // $& means the whole matched string
  return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var VueSelect = vue.defineComponent({
  name: 'vue-select',
  inheritAttrs: false,
  props: {
    // modelValue
    modelValue: {
      required: true
    },
    // TODO: default to `undefined` in next major version
    // https://github.com/vuejs/vue-next/issues/3744
    emptyModelValue: {},
    // options
    options: {
      required: true,
      type: Array
    },
    // TODO: default to `'label'` in next major version
    labelBy: {
      type: [String, Function]
    },
    // TODO: default to `'value'` in next major version
    valueBy: {
      type: [String, Function]
    },
    disabledBy: {
      "default": 'disabled',
      type: [String, Function]
    },
    groupBy: {
      "default": 'group',
      type: [String, Function]
    },
    // TODO: default to `undefined` in next major version
    visibleOptions: {
      type: Array,
      "default": null
    },
    // multiple
    multiple: {
      "default": false,
      type: Boolean
    },
    min: {
      "default": 0,
      type: Number
    },
    max: {
      "default": Infinity,
      type: Number
    },
    // search
    searchable: {
      "default": false,
      type: Boolean
    },
    searchPlaceholder: {
      "default": 'Type to search',
      type: String
    },
    searchPreFill: {
      "default": '',
      type: String
    },
    clearOnSelect: {
      "default": false,
      type: Boolean
    },
    clearOnClose: {
      "default": false,
      type: Boolean
    },
    // tag
    taggable: {
      "default": false,
      type: Boolean
    },
    collapseTags: {
      "default": false,
      type: Boolean
    },
    // misc
    autocomplete: {
      "default": 'off',
      type: String
    },
    disabled: {
      "default": false,
      type: Boolean
    },
    loading: {
      "default": false,
      type: Boolean
    },
    closeOnSelect: {
      "default": false,
      type: Boolean
    },
    hideSelected: {
      "default": false,
      type: Boolean
    },
    placeholder: {
      "default": 'Select option',
      type: String
    },
    tabindex: {
      "default": 0,
      type: Number
    },
    autofocus: {
      "default": false,
      type: Boolean
    },
    maxHeight: {
      "default": 300,
      type: Number
    },
    openDirection: {
      type: String,
      validator: function validator(value) {
        return ['top', 'bottom'].includes(value);
      }
    }
  },
  emits: ['selected', 'removed', 'update:modelValue', 'focus', 'blur', 'toggle',
  // TODO: remove use `opened` in next major version
  'opened',
  // TODO: remove use `opened` in next major version
  'closed', 'search:input', 'search:change', 'search:focus', 'search:blur'],
  setup: function setup(props, context) {
    var normalized = normalize(props);
    var normalizedEmptyModelValue = vue.computed(function () {
      var _props$emptyModelValu;
      return (_props$emptyModelValu = props.emptyModelValue) !== null && _props$emptyModelValu !== void 0 ? _props$emptyModelValu : null;
    });
    var instance = vue.getCurrentInstance();
    var wrapper = vue.ref();
    var dropdown = vue.ref();
    var input = vue.ref();
    var inputEl = vue.computed(function () {
      var _input$value;
      return (_input$value = input.value) === null || _input$value === void 0 ? void 0 : _input$value._.refs.input;
    });
    var isFocusing = vue.ref(false);
    vue.watch(function () {
      return isFocusing.value;
    }, function () {
      if (isFocusing.value) {
        context.emit('opened');
        context.emit('focus');
        if (props.searchable) {
          if (inputEl.value !== document.activeElement) {
            inputEl.value.focus();
          }
          context.emit('search:focus', inputEl.value);
        } else {
          var _wrapper$value;
          (_wrapper$value = wrapper.value) === null || _wrapper$value === void 0 ? void 0 : _wrapper$value.focus();
        }
      } else {
        if (props.searchable) {
          if (inputEl.value === document.activeElement) {
            inputEl.value.blur();
          }
          if (props.clearOnClose) clearInput();
          context.emit('search:blur', inputEl.value);
        } else {
          var _wrapper$value2;
          (_wrapper$value2 = wrapper.value) === null || _wrapper$value2 === void 0 ? void 0 : _wrapper$value2.blur();
        }
        context.emit('closed');
        context.emit('blur');
      }
      context.emit('toggle');
    });
    var focus = function focus() {
      if (props.disabled) return;
      isFocusing.value = true;
    };
    var blur = function blur(e) {
      var _wrapper$value3;
      if ((_wrapper$value3 = wrapper.value) !== null && _wrapper$value3 !== void 0 && _wrapper$value3.contains(e === null || e === void 0 ? void 0 : e.relatedTarget)) {
        setTimeout(function () {
          var _wrapper$value4;
          (_wrapper$value4 = wrapper.value) === null || _wrapper$value4 === void 0 ? void 0 : _wrapper$value4.focus();
        });
        return;
      }
      isFocusing.value = false;
    };
    var toggle = function toggle() {
      if (isFocusing.value) blur();else focus();
    };
    vue.watch(function () {
      return props.disabled;
    }, function () {
      return blur();
    });

    // input
    var searchingInputValue = vue.ref(props.searchPreFill);
    var handleInputForInput = function handleInputForInput(event) {
      context.emit('search:input', event);
    };
    var handleChangeForInput = function handleChangeForInput(event) {
      context.emit('search:change', event);
    };
    var handleFocusForInput = function handleFocusForInput(event) {
      focus();
    };
    var handleBlurForInput = function handleBlurForInput(event) {
      blur();
    };
    var searchRe = vue.computed(function () {
      return new RegExp(escapeRegExp(searchingInputValue.value), 'i');
    });
    var searchedOptions = vue.computed(function () {
      return searchingInputValue.value ? normalized.options.filter(function (option) {
        return searchRe.value.test(normalized.labelBy(option));
      }) : undefined;
    });

    // sync model value
    var normalizedModelValue = vue.ref([]);
    var selectedValueSet = vue.computed(function () {
      return new Set(normalizedModelValue.value.map(function (option) {
        return normalized.valueBy(option);
      }));
    });
    var isSynchronoused = function isSynchronoused() {
      if (props.multiple) {
        if (Array.isArray(props.modelValue) === false) return false;
        if (normalizedModelValue.value.length !== props.modelValue.length) return false;
        if (Object.keys(normalizedModelValue.value).some(function (index) {
          return normalizedModelValue.value[index] !== getOptionByValue(normalized.options, props.modelValue[index], {
            valueBy: normalized.valueBy
          });
        })) return false;
      } else {
        if (normalizedModelValue.value.length === 0 && props.modelValue !== normalizedEmptyModelValue.value) return false;
        if (normalizedModelValue.value.length === 1 && props.modelValue === normalizedEmptyModelValue.value) return false;
        if (normalizedModelValue.value[0] !== getOptionByValue(normalized.options, props.modelValue, {
          valueBy: normalized.valueBy
        })) return false;
      }
      return true;
    };
    var syncFromModelValue = function syncFromModelValue() {
      if (isSynchronoused()) return;
      normalizedModelValue.value = [];
      var modelValue = props.multiple ? props.modelValue : props.modelValue === normalizedEmptyModelValue.value ? [] : [props.modelValue];
      var _iterator = _createForOfIteratorHelper(modelValue),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          var option = getOptionByValue(normalized.options, value, {
            valueBy: normalized.valueBy
          });
          // guarantee options has modelValue
          if (hasOption(normalized.options, option, {
            valueBy: normalized.valueBy
          }) === false) continue;
          normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
            max: Infinity,
            valueBy: normalized.valueBy
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    syncFromModelValue();
    vue.watch(function () {
      return props.modelValue;
    }, function () {
      return syncFromModelValue();
    }, {
      deep: true
    });

    // guarantee options has modelValue
    vue.watch(function () {
      return normalized.options;
    }, function () {
      normalizedModelValue.value = normalized.options.filter(function (option) {
        return selectedValueSet.value.has(normalized.valueBy(option));
      });
    }, {
      deep: true
    });
    var addOrRemoveOption = function addOrRemoveOption(event, option) {
      if (props.disabled) return;

      // TODO: hot spot, improve performance
      if (option.group && props.multiple) addOrRemoveOptionForGroupOption(event, option);else addOrRemoveOptionForNonGroupOption(event, option);
      syncToModelValue();
      if (props.closeOnSelect === true) isFocusing.value = false;
      if (props.clearOnSelect === true && searchingInputValue.value) clearInput();
    };
    var addOrRemoveOptionForGroupOption = function addOrRemoveOptionForGroupOption(event, option) {
      option = option.originalOption;
      var has = option.value.every(function (value) {
        var option = getOptionByValue(normalized.options, value, {
          valueBy: normalized.valueBy
        });
        return hasOption(normalizedModelValue.value, option, {
          valueBy: normalized.valueBy
        });
      });
      if (has) {
        option.value.forEach(function (value) {
          var option = getOptionByValue(normalized.options, value, {
            valueBy: normalized.valueBy
          });
          normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
            min: normalized.min,
            valueBy: normalized.valueBy
          });
          context.emit('removed', option);
        });
      } else {
        option.value.forEach(function (value) {
          var option = getOptionByValue(normalized.options, value, {
            valueBy: normalized.valueBy
          });
          if (hasOption(normalizedModelValue.value, option, {
            valueBy: normalized.valueBy
          })) return;
          normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
            max: normalized.max,
            valueBy: normalized.valueBy
          });
          context.emit('selected', option);
        });
      }
    };
    var addOrRemoveOptionForNonGroupOption = function addOrRemoveOptionForNonGroupOption(event, option) {
      option = option.originalOption;
      if (hasOption(normalizedModelValue.value, option, {
        valueBy: normalized.valueBy
      })) {
        normalizedModelValue.value = removeOption(normalizedModelValue.value, option, {
          min: normalized.min,
          valueBy: normalized.valueBy
        });
        context.emit('removed', option);
      } else {
        if (!props.multiple && normalizedModelValue.value.length === 1) {
          var removingOption = normalizedModelValue.value[0];
          normalizedModelValue.value = removeOption(normalizedModelValue.value, normalizedModelValue.value[0], {
            min: 0,
            valueBy: normalized.valueBy
          });
          context.emit('removed', removingOption);
        }
        normalizedModelValue.value = addOption(normalizedModelValue.value, option, {
          max: normalized.max,
          valueBy: normalized.valueBy
        });
        context.emit('selected', option);
      }
    };
    var syncToModelValue = function syncToModelValue() {
      if (isSynchronoused()) return;
      var selectedValues = normalizedModelValue.value.map(function (option) {
        return normalized.valueBy(option);
      });
      if (props.multiple) {
        context.emit('update:modelValue', selectedValues);
      } else {
        if (selectedValues.length) context.emit('update:modelValue', selectedValues[0]);else context.emit('update:modelValue', normalizedEmptyModelValue.value);
      }
    };
    var clearInput = function clearInput() {
      // simulate clear input value
      inputEl.value.value = '';
      inputEl.value.dispatchEvent(new Event('input'));
      inputEl.value.dispatchEvent(new Event('change'));
    };
    var renderedOptions = vue.computed(function () {
      var _ref, _props$visibleOptions;
      return (_ref = (_props$visibleOptions = props.visibleOptions) !== null && _props$visibleOptions !== void 0 ? _props$visibleOptions : searchedOptions.value) !== null && _ref !== void 0 ? _ref : normalized.options;
    });
    var highlightedOriginalIndex = vue.ref(0);
    var optionsWithInfo = vue.computed(function () {
      var visibleValueSet = new Set(renderedOptions.value.map(function (option) {
        return normalized.valueBy(option);
      }));
      var optionsWithInfo = normalized.options.map(function (option, index) {
        var _normalized$groupBy;
        var optionWithInfo = {
          key: normalized.valueBy(option),
          label: normalized.labelBy(option),
          // selected: selectedValueSet.value.has(normalized.valueBy(option)),
          // disabled: normalized.disabledBy(option),
          group: (_normalized$groupBy = normalized.groupBy(option)) !== null && _normalized$groupBy !== void 0 ? _normalized$groupBy : false,
          // visible: visibleValueSet.has(normalized.valueBy(option)),
          // hidden: props.hideSelected ? selectedValueSet.value.has(normalized.valueBy(option)) : false,
          originalIndex: index,
          originalOption: option
        };
        optionWithInfo.selected = optionWithInfo.group ? option.value.every(function (value) {
          return selectedValueSet.value.has(value);
        }) : selectedValueSet.value.has(normalized.valueBy(option));
        optionWithInfo.disabled = optionWithInfo.group ? normalized.disabledBy(option) || option.value.every(function (value) {
          var option = getOptionByValue(normalized.options, value, {
            valueBy: normalized.valueBy
          });
          return normalized.disabledBy(option);
        }) : normalized.disabledBy(option);
        optionWithInfo.visible = optionWithInfo.group ? option.value.some(function (value) {
          return visibleValueSet.has(value);
        }) : visibleValueSet.has(normalized.valueBy(option));
        optionWithInfo.hidden = props.hideSelected ? optionWithInfo.group ? option.value.every(function (value) {
          return selectedValueSet.value.has(value);
        }) : selectedValueSet.value.has(normalized.valueBy(option)) : false;
        return optionWithInfo;
      });
      var _iterator2 = _createForOfIteratorHelper(optionsWithInfo),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var option = _step2.value;
          if (option.group === false) continue;
          if (option.disabled) {
            (function () {
              var values = new Set(option.originalOption.value);
              optionsWithInfo.filter(function (optionWithInfo) {
                return values.has(normalized.valueBy(optionWithInfo.originalOption));
              }).forEach(function (optionWithInfo) {
                return optionWithInfo.disabled = true;
              });
            })();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return optionsWithInfo;
    });
    var _usePointer = usePointer(optionsWithInfo, highlightedOriginalIndex),
      _pointerForward = _usePointer.pointerForward,
      _pointerBackward = _usePointer.pointerBackward,
      pointerSet = _usePointer.pointerSet;
    var pointerForward = function pointerForward() {
      _pointerForward();
      vue.nextTick(updateScrollTop);
    };
    var pointerBackward = function pointerBackward() {
      _pointerBackward();
      vue.nextTick(updateScrollTop);
    };
    var pointerFirst = function pointerFirst() {
      var _iterator3 = _createForOfIteratorHelper(normalized.options.keys()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var index = _step3.value;
          if (pointerSet(index)) break;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      vue.nextTick(updateScrollTop);
    };
    var pointerLast = function pointerLast() {
      var _iterator4 = _createForOfIteratorHelper(_toConsumableArray(normalized.options.keys()).reverse()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var index = _step4.value;
          if (pointerSet(index)) break;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      vue.nextTick(updateScrollTop);
    };
    var recentTypedChars = '';
    var timerForClearingRecentTypedChars;
    var alphanumRe = /^[\w]$/;
    var sortedOriginalIndexBaseOnHighlighted = vue.computed(function () {
      var indexes = _toConsumableArray(normalized.options.keys());
      return indexes.slice(highlightedOriginalIndex.value).concat(indexes.slice(0, highlightedOriginalIndex.value));
    });
    var typeAhead = function typeAhead(event) {
      if (props.searchable) return;
      var changed = false;
      if (alphanumRe.test(event.key)) {
        recentTypedChars += event.key.toLowerCase();
        changed = true;
      } else if (event.code === 'Space') {
        recentTypedChars += ' ';
      }
      if (changed) {
        var _iterator5 = _createForOfIteratorHelper(sortedOriginalIndexBaseOnHighlighted.value),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _normalized$labelBy, _normalized$labelBy$t;
            var index = _step5.value;
            if (((_normalized$labelBy = normalized.labelBy(normalized.options[index])) === null || _normalized$labelBy === void 0 ? void 0 : (_normalized$labelBy$t = _normalized$labelBy.toLowerCase()) === null || _normalized$labelBy$t === void 0 ? void 0 : _normalized$labelBy$t.startsWith(recentTypedChars)) !== true) continue;
            if (pointerSet(index)) break;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        clearTimeout(timerForClearingRecentTypedChars);
        timerForClearingRecentTypedChars = setTimeout(function () {
          recentTypedChars = '';
        }, 500);
      }
    };
    var updateScrollTop = function updateScrollTop() {
      var _wrapper$value5;
      var highlightedEl = (_wrapper$value5 = wrapper.value) === null || _wrapper$value5 === void 0 ? void 0 : _wrapper$value5.querySelector('.highlighted');
      if (!highlightedEl) return;
      if (!dropdown.value) return;
      var computedStyle = getComputedStyle(highlightedEl);
      var safeCount;
      safeCount = 0;
      while (highlightedEl.offsetTop + parseFloat(computedStyle.height) + parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom) > dropdown.value.$el.clientHeight + dropdown.value.$el.scrollTop && safeCount++ < optionsWithInfo.value.length) {
        dropdown.value.$el.scrollTop = dropdown.value.$el.scrollTop + parseFloat(computedStyle.height) + parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
      }
      safeCount = 0;
      while (highlightedEl.offsetTop < dropdown.value.$el.scrollTop && safeCount++ < optionsWithInfo.value.length) {
        dropdown.value.$el.scrollTop = dropdown.value.$el.scrollTop - parseFloat(computedStyle.height) - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      }
    };
    vue.watch(function () {
      return [isFocusing.value, normalized.options, selectedValueSet.value];
    }, function (_, oldValue) {
      if ((oldValue === null || oldValue === void 0 ? void 0 : oldValue[0]) === true) return;
      if (isFocusing.value === false) return;
      if (normalizedModelValue.value.length === 0) return;
      pointerSet(normalized.options.findIndex(function (option) {
        return selectedValueSet.value.has(normalized.valueBy(option));
      }));
      vue.nextTick(updateScrollTop);
    }, {
      deep: true,
      immediate: true
    });
    var dataAttrs = vue.computed(function () {
      return {
        'data-is-focusing': isFocusing.value,
        'data-visible-length': optionsWithInfo.value.filter(function (option) {
          return option.visible && option.hidden === false;
        }).length,
        'data-not-selected-length': normalized.options.length - optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length,
        'data-selected-length': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length,
        'data-addable': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length < normalized.max,
        'data-removable': optionsWithInfo.value.filter(function (option) {
          return option.selected;
        }).length > normalized.min,
        'data-total-length': normalized.options.length,
        'data-multiple': props.multiple,
        'data-loading': props.loading,
        'data-disabled': props.disabled
      };
    });
    vue.provide('dataAttrs', dataAttrs);
    var selectedOptions = vue.computed(function () {
      return optionsWithInfo.value.filter(function (option) {
        return option.selected;
      }).filter(function (option) {
        return !option.group;
      });
    });
    var innerPlaceholder = vue.computed(function () {
      if (props.multiple) {
        if (selectedOptions.value.length === 0) {
          return props.placeholder;
        } else if (selectedOptions.value.length === 1) {
          return '1 option selected';
        } else {
          return selectedOptions.value.length + ' options selected';
        }
      } else {
        if (selectedOptions.value.length === 0) {
          return props.placeholder;
        } else {
          return selectedOptions.value[0].label + '';
        }
      }
    });
    var selected = vue.computed(function () {
      var selected = selectedOptions.value.map(function (option) {
        return option.originalOption;
      });
      if (props.multiple) return selected;
      return selected[0] || normalizedEmptyModelValue.value;
    });
    var direction = vue.ref();
    vue.watch(function () {
      return [props.openDirection, isFocusing.value];
    }, function () {
      var _ref2, _props$openDirection;
      direction.value = (_ref2 = (_props$openDirection = props.openDirection) !== null && _props$openDirection !== void 0 ? _props$openDirection : calcPreferredDirection()) !== null && _ref2 !== void 0 ? _ref2 : 'bottom';
    }, {
      immediate: true
    });
    function calcPreferredDirection() {
      if (wrapper.value === undefined) return;
      if (window === undefined) return;
      var spaceBelow = window.innerHeight - wrapper.value.getBoundingClientRect().bottom;
      var hasEnoughSpaceBelow = spaceBelow >= props.maxHeight;
      return hasEnoughSpaceBelow ? 'bottom' : 'top';
    }
    return {
      instance: instance,
      isFocusing: isFocusing,
      wrapper: wrapper,
      dropdown: dropdown,
      input: input,
      focus: focus,
      blur: blur,
      toggle: toggle,
      searchingInputValue: searchingInputValue,
      handleInputForInput: handleInputForInput,
      handleChangeForInput: handleChangeForInput,
      handleFocusForInput: handleFocusForInput,
      handleBlurForInput: handleBlurForInput,
      optionsWithInfo: optionsWithInfo,
      addOrRemoveOption: addOrRemoveOption,
      dataAttrs: dataAttrs,
      innerPlaceholder: innerPlaceholder,
      selected: selected,
      highlightedOriginalIndex: highlightedOriginalIndex,
      pointerForward: pointerForward,
      pointerBackward: pointerBackward,
      pointerFirst: pointerFirst,
      pointerLast: pointerLast,
      typeAhead: typeAhead,
      pointerSet: pointerSet,
      direction: direction
    };
  },
  components: {
    VInput: script$2,
    VTags: script$1,
    VDropdown: script
  }
});
VueSelect.__VERSION__ = version;

var _imports_0 = 'data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==';

var _hoisted_1 = ["tabindex", "id", "role", "aria-expanded", "aria-owns", "aria-activedescendant", "aria-busy", "aria-disabled"];
var _hoisted_2 = {
  "class": "vue-select-header"
};
var _hoisted_3 = {
  key: 0,
  "class": "vue-input"
};
var _hoisted_4 = ["placeholder", "autocomplete"];
var _hoisted_5 = ["onClick"];
var _hoisted_6 = /*#__PURE__*/vue.createElementVNode("span", {
  "class": "icon loading"
}, [/*#__PURE__*/vue.createElementVNode("div"), /*#__PURE__*/vue.createElementVNode("div"), /*#__PURE__*/vue.createElementVNode("div")], -1 /* HOISTED */);
var _hoisted_7 = {
  key: 0,
  "class": "vue-select-input-wrapper"
};
var _hoisted_8 = /*#__PURE__*/vue.createElementVNode("span", {
  "class": "icon loading"
}, [/*#__PURE__*/vue.createElementVNode("div"), /*#__PURE__*/vue.createElementVNode("div"), /*#__PURE__*/vue.createElementVNode("div")], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_tags = vue.resolveComponent("v-tags");
  var _component_v_input = vue.resolveComponent("v-input");
  var _component_v_dropdown = vue.resolveComponent("v-dropdown");
  return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
    ref: "wrapper",
    "class": ["vue-select", ["direction-".concat(_ctx.direction)]],
    tabindex: _ctx.isFocusing ? -1 : _ctx.tabindex,
    onFocus: _cache[9] || (_cache[9] = function () {
      return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
    }),
    onBlur: _cache[10] || (_cache[10] = function (e) {
      return _ctx.searchable ? false : _ctx.blur(e);
    })
  }, Object.assign({}, _ctx.dataAttrs, _ctx.$attrs), {
    onKeypress: _cache[11] || (_cache[11] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.highlightedOriginalIndex !== null && _ctx.addOrRemoveOption(_ctx.$event, _ctx.optionsWithInfo[_ctx.highlightedOriginalIndex]);
    }, ["prevent", "exact"]), ["enter"])),
    onKeydown: [_cache[12] || (_cache[12] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerForward && _ctx.pointerForward.apply(_ctx, arguments);
    }, ["prevent", "exact"]), ["down"])), _cache[13] || (_cache[13] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerBackward && _ctx.pointerBackward.apply(_ctx, arguments);
    }, ["prevent", "exact"]), ["up"])), _cache[14] || (_cache[14] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerFirst && _ctx.pointerFirst.apply(_ctx, arguments);
    }, ["prevent", "exact"]), ["home"])), _cache[15] || (_cache[15] = vue.withKeys(vue.withModifiers(function () {
      return _ctx.pointerLast && _ctx.pointerLast.apply(_ctx, arguments);
    }, ["prevent", "exact"]), ["end"])), _cache[16] || (_cache[16] = function () {
      return _ctx.typeAhead && _ctx.typeAhead.apply(_ctx, arguments);
    })],
    id: "vs".concat(_ctx.instance.uid, "-combobox"),
    role: _ctx.searchable ? 'combobox' : null,
    "aria-expanded": _ctx.isFocusing,
    "aria-haspopup": "listbox",
    "aria-owns": "vs".concat(_ctx.instance.uid, "-listbox"),
    "aria-activedescendant": _ctx.highlightedOriginalIndex === null ? null : "vs".concat(_ctx.instance.uid, "-option-").concat(_ctx.highlightedOriginalIndex),
    "aria-busy": _ctx.loading,
    "aria-disabled": _ctx.disabled
  }), [vue.createElementVNode("div", _hoisted_2, [_ctx.multiple && _ctx.taggable && _ctx.modelValue.length === 0 || _ctx.searchable === false && _ctx.taggable === false ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "label", {
    selected: _ctx.selected
  }, function () {
    return [vue.createElementVNode("input", {
      placeholder: _ctx.innerPlaceholder,
      autocomplete: _ctx.autocomplete,
      readonly: "",
      onClick: _cache[0] || (_cache[0] = function () {
        return _ctx.focus && _ctx.focus.apply(_ctx, arguments);
      })
    }, null, 8 /* PROPS */, _hoisted_4)];
  })])) : vue.createCommentVNode("v-if", true), _ctx.multiple && _ctx.taggable ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
    key: 1
  }, [vue.createVNode(_component_v_tags, {
    modelValue: _ctx.optionsWithInfo,
    "collapse-tags": _ctx.collapseTags,
    tabindex: "-1",
    onClick: _ctx.focus
  }, {
    "default": vue.withCtx(function (_ref) {
      var option = _ref.option;
      return [vue.renderSlot(_ctx.$slots, "tag", {
        option: option.originalOption,
        remove: function remove() {
          return _ctx.addOrRemoveOption(_ctx.$event, option);
        }
      }, function () {
        return [vue.createElementVNode("span", null, vue.toDisplayString(option.label), 1 /* TEXT */), vue.createElementVNode("img", {
          src: _imports_0,
          alt: "delete tag",
          "class": "icon delete",
          onClick: vue.withModifiers(function () {
            return _ctx.addOrRemoveOption(_ctx.$event, option);
          }, ["prevent", "stop"])
        }, null, 8 /* PROPS */, _hoisted_5)];
      })];
    }),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["modelValue", "collapse-tags", "onClick"]), vue.renderSlot(_ctx.$slots, "toggle", {
    isFocusing: _ctx.isFocusing,
    toggle: _ctx.toggle
  }, function () {
    return [vue.createElementVNode("span", {
      "class": vue.normalizeClass(["icon arrow-downward", {
        active: _ctx.isFocusing
      }]),
      onClick: _cache[1] || (_cache[1] = function () {
        return _ctx.toggle && _ctx.toggle.apply(_ctx, arguments);
      }),
      onMousedown: _cache[2] || (_cache[2] = vue.withModifiers(function () {}, ["prevent", "stop"]))
    }, null, 34 /* CLASS, HYDRATE_EVENTS */)];
  })], 64 /* STABLE_FRAGMENT */)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
    key: 2
  }, [_ctx.searchable ? (vue.openBlock(), vue.createBlock(_component_v_input, {
    key: 0,
    ref: "input",
    modelValue: _ctx.searchingInputValue,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.searchingInputValue = $event;
    }),
    disabled: _ctx.disabled,
    autocomplete: _ctx.autocomplete,
    placeholder: _ctx.isFocusing ? _ctx.searchPlaceholder : _ctx.innerPlaceholder,
    onInput: _ctx.handleInputForInput,
    onChange: _ctx.handleChangeForInput,
    onFocus: _ctx.handleFocusForInput,
    onBlur: _ctx.handleBlurForInput,
    onEscape: _ctx.blur,
    autofocus: _ctx.autofocus || _ctx.taggable && _ctx.searchable,
    tabindex: _ctx.tabindex,
    comboboxUid: _ctx.instance.uid
  }, null, 8 /* PROPS */, ["modelValue", "disabled", "autocomplete", "placeholder", "onInput", "onChange", "onFocus", "onBlur", "onEscape", "autofocus", "tabindex", "comboboxUid"])) : vue.createCommentVNode("v-if", true), _ctx.loading ? vue.renderSlot(_ctx.$slots, "loading", {
    key: 1
  }, function () {
    return [_hoisted_6];
  }) : vue.renderSlot(_ctx.$slots, "toggle", {
    key: 2,
    isFocusing: _ctx.isFocusing,
    toggle: _ctx.toggle
  }, function () {
    return [vue.createElementVNode("span", {
      "class": vue.normalizeClass(["icon arrow-downward", {
        active: _ctx.isFocusing
      }]),
      onClick: _cache[4] || (_cache[4] = function () {
        return _ctx.toggle && _ctx.toggle.apply(_ctx, arguments);
      }),
      onMousedown: _cache[5] || (_cache[5] = vue.withModifiers(function () {}, ["prevent", "stop"]))
    }, null, 34 /* CLASS, HYDRATE_EVENTS */)];
  })], 64 /* STABLE_FRAGMENT */))]), _ctx.multiple && _ctx.taggable && _ctx.searchable ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [vue.withDirectives(vue.createVNode(_component_v_input, {
    ref: "input",
    modelValue: _ctx.searchingInputValue,
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return _ctx.searchingInputValue = $event;
    }),
    disabled: _ctx.disabled,
    autocomplete: _ctx.autocomplete,
    placeholder: _ctx.isFocusing ? _ctx.searchPlaceholder : _ctx.innerPlaceholder,
    onInput: _ctx.handleInputForInput,
    onChange: _ctx.handleChangeForInput,
    onFocus: _ctx.handleFocusForInput,
    onBlur: _ctx.handleBlurForInput,
    onEscape: _ctx.blur,
    autofocus: _ctx.autofocus || _ctx.taggable && _ctx.searchable,
    tabindex: _ctx.tabindex,
    comboboxUid: _ctx.instance.uid
  }, null, 8 /* PROPS */, ["modelValue", "disabled", "autocomplete", "placeholder", "onInput", "onChange", "onFocus", "onBlur", "onEscape", "autofocus", "tabindex", "comboboxUid"]), [[vue.vShow, _ctx.isFocusing]]), _ctx.loading ? vue.renderSlot(_ctx.$slots, "loading", {
    key: 0
  }, function () {
    return [_hoisted_8];
  }) : vue.createCommentVNode("v-if", true)])) : vue.createCommentVNode("v-if", true), vue.createVNode(_component_v_dropdown, {
    ref: "dropdown",
    modelValue: _ctx.optionsWithInfo,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return _ctx.optionsWithInfo = $event;
    }),
    onClickItem: _ctx.addOrRemoveOption,
    onMouseenter: _cache[8] || (_cache[8] = function (ev, option) {
      return _ctx.pointerSet(option.originalIndex);
    }),
    comboboxUid: _ctx.instance.uid,
    maxHeight: _ctx.maxHeight,
    highlightedOriginalIndex: _ctx.highlightedOriginalIndex
  }, {
    "default": vue.withCtx(function (_ref2) {
      var option = _ref2.option;
      return [vue.renderSlot(_ctx.$slots, "dropdown-item", {
        option: option.originalOption
      }, function () {
        return [vue.createElementVNode("span", null, vue.toDisplayString(option.label), 1 /* TEXT */)];
      })];
    }),

    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["modelValue", "onClickItem", "comboboxUid", "maxHeight", "highlightedOriginalIndex"])], 16 /* FULL_PROPS */, _hoisted_1);
}

VueSelect.render = render;
VueSelect.__file = "src/index.vue";

module.exports = VueSelect;
