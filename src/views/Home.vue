<template>
  <div class="home">
    <van-form>
      <template v-for="(v, i) in schema">
        <component :is="v.type" :value="v.value" :model="form" :prop="v.prop" :label="v.formItem.label" :placeholder="v.formItem.placeholder" :key="i"></component>
      </template>
    </van-form>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue'
export default {
  name: 'Home',
  components: {
    MyInput
  },
  data () {
    return {
      form: {
        input1: '',
        input2: ''
      },
      schema: [
        {type: 'MyInput', value: 'input1', prop:'input1', formItem: { label: '活动名称', placeholder: '请输入活动名称' }},
        {type: 'MyInput', value: 'input2', prop:'input2',formItem: { label: '活动爸爸', placeholder: '请输入活动爸爸' }}
      ]
    }
  }
}
</script>
