<template>
  <van-cell-group>
    <van-field
      v-model="model[prop]"
      :placeholder="placeholder"
      :label="label"
      v-on="onEvents"
      @change="$emit('change', { prop, value: $event })"
    />
  </van-cell-group>
</template>
<script>
import FormMixins from './mixins/form-mixin'
export default {
  name: 'MyInput',
  mixins: [FormMixins]
}
</script>
