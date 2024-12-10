<template>
  <div class="recipe-details-header">
    <RecipeImage 
      :src="imageUrl" 
      :alt="title"
      class="mb-4"
    />
    <RecipeTypography 
      tag="h1" 
      variant="recipe-title" 
      margin="large"
      variant-classes="text-4xl font-bold text-gray-800"
      margin-classes="mb-8"
      :content="title"
    />
    <div class="flex items-center gap-4">
      <Rating :value="rating" />
      <Badge :text="category" variant="accent" />
    </div>
  </div>
</template>

<script>
import RecipeImage from '../atoms/RecipeImage.vue'
import RecipeTypography from '../atoms/RecipeTypography.vue'
import Rating from '../atoms/Rating.vue'
import Badge from '../atoms/Badge.vue'

export default {
  components: {
    RecipeImage,
    RecipeTypography,
    Rating,
    Badge
  },
  props: {
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true }
  }
}
</script> 