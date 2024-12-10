<template>
  <div class="cooking-instructions">
    <RecipeTypography 
      tag="h2" 
      variant="section-title" 
      margin="normal"
      variant-classes="text-2xl font-bold text-gray-800"
      margin-classes="mb-6"
      content="Instructions"
    />
    <ol class="space-y-4">
      <li 
        v-for="(step, index) in instructions" 
        :key="index"
        class="flex gap-4"
      >
        <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">
          {{ index + 1 }}
        </span>
        <RecipeTypography 
          tag="p" 
          variant="instruction"
          margin="none"
          variant-classes="text-base text-gray-600"
          margin-classes="mb-0"
          :content="step"
        />
      </li>
    </ol>
  </div>
</template>

<script>
import RecipeTypography from '../atoms/RecipeTypography.vue'

export default {
  components: {
    RecipeTypography
  },
  props: {
    instructions: {
      type: Array,
      required: true
    }
  }
}
</script>