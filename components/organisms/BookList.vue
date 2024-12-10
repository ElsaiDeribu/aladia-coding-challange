<template>
  <div>
    <RecipeFilter
      :categories="uniqueCategories"
      @search="handleSearch"
      @filter="handleFilter"
    />

    <!-- Book Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <RecipeCard
        v-for="book in filteredBooks"
        :key="book.id"
        :recipe="book"
        @select="$emit('select-book', book)"
        padding="compact"
        margin="none"
      />
    </div>
  </div>
</template>

<script>
import RecipeCard from '~/components/molecules/RecipeCard.vue';
import RecipeFilter from '~/components/molecules/RecipeFilter.vue'

export default {
  components: {
    RecipeCard,
    RecipeFilter
  },
  props: {
    books: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((book) =>
          [
            "id",
            "imageUrl",
            "title",
            "rating",
            "category",
            "ingredients",
            "instructions"
          ].every((prop) => prop in book)
        );
      }
    }
  },
  data() {
    return {
      searchQuery: '',
      selectedCategories: []
    }
  },
  computed: {
    uniqueCategories() {
      return [...new Set(this.books.map(book => book.category))]
    },
    filteredBooks() {
      let result = this.books

      // Filter by search query
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        result = result.filter(book => 
          book.title.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
        )
      }

      // Filter by selected categories
      if (this.selectedCategories.length > 0) {
        result = result.filter(book => 
          this.selectedCategories.includes(book.category)
        )
      }

      return result
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query
    },
    handleFilter(categories) {
      this.selectedCategories = categories
    }
  }
};
</script>
