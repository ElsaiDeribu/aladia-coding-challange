<template>
  <div class="mb-6 space-y-4">


    <div class="flex gap-4">
      <SearchInput
      v-model="searchQuery"
      placeholder="Search recipes..."
      class="w-full"
    />
      <Select
        v-model="selectedContinent"
        :options="continentOptions"
        placeholder="Filter by continent"
        clearable
        @update:modelValue="handleContinentChange"
      />
    </div>

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
  components: {
    Select: () => import('@/components/atoms/Select.vue')
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      selectedCategories: [],
      selectedContinent: '',
      continentOptions: [
        { label: 'Asian', value: 'asian' },
        { label: 'European', value: 'european' },
        { label: 'African', value: 'african' },
        { label: 'American', value: 'american' },
        { label: 'Oceanian', value: 'oceanian' }
      ]
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
    },
    handleContinentChange(value) {
      this.$emit('continent-filter', value)
    }
  },
  watch: {
    searchQuery(newValue) {
      this.$emit('search', newValue)
    }
  }
}
</script>
