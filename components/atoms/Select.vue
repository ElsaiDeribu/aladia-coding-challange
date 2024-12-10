<template>
  <el-select
    v-model="localValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :clearable="clearable"
    class="w-full"
    style="width: 100%"
    @change="$emit('update:modelValue', $event)"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    />
  </el-select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (options) => options.every(option => 
        'label' in option && 'value' in option
      )
    },
    placeholder: {
      type: String,
      default: 'Please select'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>