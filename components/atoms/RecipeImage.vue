<template>
  <img 
    :src="src" 
    :alt="alt" 
    :class="['w-full h-64 object-cover rounded-lg shadow-md', $attrs.class]"
  />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: 'Recipe image' },
  },
  inheritAttrs: false
};
</script> 