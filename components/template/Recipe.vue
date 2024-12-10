<template>
  <div class="container mx-auto px-4" :class="{'py-8': !selectedBook, 'pt-0 pb-8': selectedBook}">
    <!-- Show BookList when no book is selected -->
    <BookList
      v-if="!selectedBook"
      :books="books"
      @select-book="handleBookSelect"
    />

    <!-- Show RecipeBook when a book is selected -->
    <div v-else class="flex items-start">
      <Button
        @click="selectedBook = null"
        variant="secondary"
        class="mb-4"
        content="← Back to List" />

      <BookDetails :recipe="selectedBook" />
    </div>
  </div>
</template>

<script>
import BookDetails from "~/components/organisms/BookDetails.vue";
import BookList from "~/components/organisms/BookList.vue";
import Button from "~/components/atoms/Button.vue";
import books from "~/mock/books.json";

export default {
  name: "Recipe",
  components: {
    BookList,
    BookDetails,
    Button
  },

  data() {
    return {
      selectedBook: null,
      books: books
    };
  },

  methods: {
    handleBookSelect(book) {
      this.selectedBook = book;
    }
  }
};
</script>
