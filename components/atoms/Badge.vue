<template>
  <span 
    class="inline-block px-3 py-1 text-sm rounded-full"
    :class="variantClass"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: { type: String, required: true },
    variant: { 
      type: String, 
      default: 'primary',
      validator: value => ['primary', 'secondary', 'accent'].includes(value)
    }
  },
  computed: {
    variantClass() {
      const classes = {
        primary: 'bg-blue-100 text-blue-800',
        secondary: 'bg-gray-100 text-gray-800',
        accent: 'bg-yellow-100 text-yellow-800'
      };
      return classes[this.variant];
    }
  }
};
</script> 