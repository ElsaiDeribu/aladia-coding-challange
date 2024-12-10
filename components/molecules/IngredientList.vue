<template>
  <div class="ingredient-list">
    <RecipeTypography 
      tag="h2" 
      variant="section-title" 
      margin="normal"
      variant-classes="text-2xl font-bold text-gray-800"
      margin-classes="mb-6"
      content="Ingredients"
    />
    <ul class="space-y-2">
      <li v-for="(ingredient, index) in ingredients" :key="index">
        <RecipeTypography 
          tag="p" 
          variant="ingredient" 
          margin="none"
          variant-classes="text-base text-gray-600"
          margin-classes="mb-0"
          :content="ingredient"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import RecipeTypography from '../atoms/RecipeTypography.vue'

export default {
  components: {
    RecipeTypography
  },
  props: {
    ingredients: {
      type: Array,
      required: true
    }
  }
}
</script>