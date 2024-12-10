<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors',
      variantClasses[variant],
      sizeClasses[size]
    ]"
    :disabled="disabled"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: value => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    variantClasses() {
      return {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-black text-white hover:bg-gray-700',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
      }
    },
    sizeClasses() {
      return {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
      }
    }
  }
};
</script>