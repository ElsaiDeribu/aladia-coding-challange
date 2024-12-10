<template>
  <button
    class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
    :class="isSelected ? 
      'bg-blue-100 text-blue-800 hover:bg-blue-200' : 
      'bg-gray-100 text-gray-600 hover:bg-gray-200'"
    @click="$emit('toggle')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    isSelected: { type: Boolean, default: false }
  }
}
</script>