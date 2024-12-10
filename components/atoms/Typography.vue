<!-- components/atoms/Typography.vue -->
<template>
  <component :is="tag" :class="`typography ${typeClass}`">{{ text }}</component>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: 'p' },
    text: { type: String, required: true },
    type: { type: String, default: 'body' }, // 'title', 'body'
  },
  computed: {
    typeClass() {
      return this.type === 'title' ? 'text-2xl font-bold' : 'text-base';
    },
  },
};
</script>
