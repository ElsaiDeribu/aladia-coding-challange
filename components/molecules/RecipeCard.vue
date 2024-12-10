<template>
  <article 
    class="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    :class="[paddingClasses, marginClasses]"
    @click="$emit('select')"
  >
    <RecipeImage 
      :src="recipe.imageUrl" 
      :alt="recipe.title"
      :class="imageClasses"
    />
    <div :class="contentClasses">
      <RecipeTypography 
        tag="h3" 
        variant="section-title" 
        margin="normal"
        :variant-classes="titleClasses"
        margin-classes="mb-4"
        :content="recipe.title"
      />
      <Rating :value="recipe.rating" />
      <Badge 
        :text="recipe.category"
        variant="secondary"
        class="mt-2"
      />
      <div v-if="variant === 'detailed'" class="mt-4">
        <RecipeTypography
          tag="h4"
          variant="section-title"
          margin="normal"
          variant-classes="text-lg font-semibold text-gray-700"
          margin-classes="mb-2"
          content="Ingredients"
        />
        <ul class="list-disc list-inside mb-4">
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
        <RecipeTypography
          tag="h4"
          variant="section-title"
          margin="normal"
          variant-classes="text-lg font-semibold text-gray-700"
          margin-classes="mb-2"
          content="Instructions"
        />
        <ol class="list-decimal list-inside">
          <li v-for="instruction in recipe.instructions" :key="instruction">
            {{ instruction }}
          </li>
        </ol>
      </div>
    </div>
  </article>
</template>

<script>
import RecipeImage from '@/components/atoms/RecipeImage.vue'
import RecipeTypography from '@/components/atoms/RecipeTypography.vue'
import Rating from '@/components/atoms/Rating.vue'
import Badge from '@/components/atoms/Badge.vue'

export default {
  components: {
    RecipeImage,
    RecipeTypography,
    Rating,
    Badge
  },
  props: {
    recipe: {
      type: Object,
      required: true,
      validator: (value) => {
        return [
          'id',
          'imageUrl',
          'title',
          'rating',
          'category',
          'ingredients',
          'instructions'
        ].every(prop => prop in value)
      }
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'compact', 'detailed'].includes(value)
    },
    padding: {
      type: String,
      default: 'normal',
      validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
    },
    margin: {
      type: String,
      default: 'normal',
      validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
    }
  },
  computed: {
    imageClasses() {
      return {
        'h-48': this.variant === 'compact',
        'h-64': this.variant === 'default',
        'h-96': this.variant === 'detailed'
      }
    },
    contentClasses() {
      return {
        'p-2': this.variant === 'compact',
        'p-4': this.variant === 'default',
        'p-6': this.variant === 'detailed'
      }
    },
    titleClasses() {
      return {
        'text-lg font-semibold text-gray-800': this.variant === 'compact',
        'text-2xl font-bold text-gray-800': this.variant === 'default',
        'text-3xl font-bold text-gray-800': this.variant === 'detailed'
      }
    },
    paddingClasses() {
      return {
        'p-0': this.padding === 'none',
        'p-2': this.padding === 'small',
        'p-4': this.padding === 'normal',
        'p-6': this.padding === 'large'
      }
    },
    marginClasses() {
      return {
        'm-0': this.margin === 'none',
        'm-2': this.margin === 'small', 
        'm-4': this.margin === 'normal',
        'm-6': this.margin === 'large'
      }
    }
  }
}
</script>
