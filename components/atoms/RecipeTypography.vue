<template>
  <component 
    :is="tag" 
    :class="[
      'typography',
      variantClasses,
      marginClasses
    ]"
  >
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'p' },
    variant: { 
      type: String, 
      default: 'body',
      validator: value => [
        'recipe-title',
        'section-title',
        'ingredient',
        'instruction',
        'body'
      ].includes(value)
    },
    margin: {
      type: String,
      default: 'normal',
      validator: value => ['none', 'normal', 'large'].includes(value)
    },
    variantClasses: {
      type: String,
      required: true,
      default: 'text-base text-gray-600'
    },
    marginClasses: {
      type: String,
      required: true,
      default: 'mb-4'
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>