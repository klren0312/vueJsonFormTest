export default {
  props: {
    value: [Number, String, Array, Object, Boolean, Date], // 绑定值
    onEvents: { // 绑定事件
      type: Object,
      default () { return {} }
    },
    prop: String,
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    model: {
      type: Object,
      default: () => {} 
    }
  },
  computed: {
    bindVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    },
  }
}