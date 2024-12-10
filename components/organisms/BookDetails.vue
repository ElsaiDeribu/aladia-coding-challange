<template>
  <article class="recipe-book w-[70%] mx-auto">
    <RecipeDetailsHeader
      :imageUrl="recipe.imageUrl"
      :title="recipe.title"
      :rating="recipe.rating"
      :category="recipe.category"
    />
    
    <div class="grid md:grid-cols-2 gap-8 mt-8">
      <IngredientList 
        :ingredients="recipe.ingredients"
      />
      
      <CookingInstructions 
        :instructions="recipe.instructions"
      />
    </div>
  </article>
</template>

<script>
import CookingInstructions from '~/components/molecules/CookingInstructions.vue';
import IngredientList from '~/components/molecules/IngredientList.vue';
import RecipeDetailsHeader from '~/components/molecules/RecipeDetailsHeader.vue';

export default {
  components: {
    RecipeDetailsHeader,
    IngredientList,
    CookingInstructions
  },
  props: {
    recipe: {
      type: Object,
      required: true,
      validator: (value) => {
        return [
          'imageUrl',
          'title',
          'rating',
          'category',
          'ingredients',
          'instructions'
        ].every(prop => prop in value)
      }
    }
  }
}
</script> 