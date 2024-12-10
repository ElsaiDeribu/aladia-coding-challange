<template>
  <div>
    <RecipeFilter
      :categories="uniqueCategories"
      @search="handleSearch"
      @filter="handleFilter"
      @continent-filter="handleContinentFilter"
    />

    <!-- Book Grid -->
    <div 
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="isLoading"
      infinite-scroll-distance="10"
    >
      <RecipeCard
        v-for="book in visibleBooks"
        :key="book.id"
        :recipe="book"
        @select="$emit('select-book', book)"
        padding="compact"
        margin="none"
        v-show="book.imageLoaded"
      />
      
      <div v-if="isLoading" class="col-span-full text-center py-4">
        Loading more recipes...
      </div>
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
            "instructions",
            "continent"
          ].every((prop) => prop in book)
        );
      }
    }
  },
  data() {
    return {
      searchQuery: '',
      selectedCategories: [],
      selectedContinent: '',
      loadedImages: new Set(),
      itemsPerPage: 12,
      currentPage: 1,
      isLoading: false
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

      // Add continent filter
      if (this.selectedContinent) {
        result = result.filter(book => 
          book.continent?.toLowerCase() === this.selectedContinent
        )
      }

      // Add imageLoaded property
      return result.map(book => ({
        ...book,
        imageLoaded: this.loadedImages.has(book.id)
      }))
    },
    visibleBooks() {
      return this.filteredBooks.slice(0, this.currentPage * this.itemsPerPage)
    },
    hasMoreBooks() {
      return this.visibleBooks.length < this.filteredBooks.length
    }
  },
  methods: {
    handleSearch(query) {
      this.searchQuery = query
      this.resetPagination()
    },
    handleFilter(categories) {
      this.selectedCategories = categories
      this.resetPagination()
    },
    resetPagination() {
      this.currentPage = 1
      this.loadedImages.clear()
      this.preloadImages()
    },
    async loadMore() {
      if (this.isLoading || !this.hasMoreBooks) return

      this.isLoading = true
      
      // Simulate network delay for smoother UX
      await new Promise(resolve => setTimeout(resolve, 300))
      
      this.currentPage++
      this.preloadImages()
      this.isLoading = false
    },
    preloadImages() {
      const startIdx = (this.currentPage - 1) * this.itemsPerPage
      const endIdx = this.currentPage * this.itemsPerPage
      
      this.filteredBooks.slice(startIdx, endIdx).forEach(book => {
        if (!this.loadedImages.has(book.id)) {
          const img = new Image()
          img.onload = () => {
            this.loadedImages.add(book.id)
            this.$forceUpdate()
          }
          img.src = book.imageUrl
        }
      })
    },
    handleContinentFilter(continent) {
      this.selectedContinent = continent
      this.resetPagination()
    }
  },
  mounted() {
    this.preloadImages()
  }
};
</script>
