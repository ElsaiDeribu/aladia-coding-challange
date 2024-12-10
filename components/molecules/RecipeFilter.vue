<template>
  <div class="mb-6 space-y-4">
    <SearchInput
      v-model="searchQuery"
      placeholder="Search recipes..."
      class="w-full"
    />

    <div class="flex flex-wrap gap-2">
      <FilterChip
        v-for="category in categories"
        :key="category"
        :label="category"
        :is-selected="selectedCategories.includes(category)"
        @toggle="toggleCategory(category)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      selectedCategories: []
    }
  },
  methods: {
    toggleCategory(category) {
      const index = this.selectedCategories.indexOf(category)
      if (index === -1) {
        this.selectedCategories.push(category)
      } else {
        this.selectedCategories.splice(index, 1)
      }
      this.$emit('filter', this.selectedCategories)
    }
  },
  watch: {
    searchQuery(newValue) {
      this.$emit('search', newValue)
    }
  }
}
</script>
