import BookList from '@/components/organisms/BookList.vue';

export default {
  title: 'Organisms/BookList',
  component: BookList,
  tags: ['autodocs'],
  argTypes: {
    books: {
      control: 'array',
      description: 'Array of recipe/book objects to display',
      required: true
    }
  }
};

export const Default = {
  args: {
    books: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        title: 'Tempura',
        rating: 4.5,
        category: 'Japanese',
        ingredients: ['Shrimp', 'Vegetables', 'Tempura batter', 'Dipping sauce'],
        instructions: ['Make batter', 'Fry items', 'Serve immediately']
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
        title: 'Chicken Tikka',
        rating: 4.8,
        category: 'Indian',
        ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lime'],
        instructions: ['Marinate chicken', 'Grill', 'Serve with naan']
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
        title: 'Bibimbap',
        rating: 4.6,
        category: 'Korean',
        ingredients: ['Rice', 'Vegetables', 'Beef', 'Gochujang'],
        instructions: ['Prepare toppings', 'Arrange in bowl', 'Mix before eating']
      }
    ]
  }
};

export const ManyRecipes = {
  args: {
    books: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        title: 'Tempura',
        rating: 4.5,
        category: 'Japanese',
        ingredients: ['Shrimp', 'Vegetables', 'Tempura batter', 'Dipping sauce'],
        instructions: ['Make batter', 'Fry items', 'Serve immediately']
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
        title: 'Chicken Tikka',
        rating: 4.8,
        category: 'Indian',
        ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lime'],
        instructions: ['Marinate chicken', 'Grill', 'Serve with naan']
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
        title: 'Bibimbap',
        rating: 4.6,
        category: 'Korean',
        ingredients: ['Rice', 'Vegetables', 'Beef', 'Gochujang'],
        instructions: ['Prepare toppings', 'Arrange in bowl', 'Mix before eating']
      },
      {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f',
        title: 'Spaghetti Carbonara',
        rating: 4.7,
        category: 'Italian',
        ingredients: ['Pasta', 'Eggs', 'Pecorino', 'Guanciale'],
        instructions: ['Cook pasta', 'Prepare sauce', 'Combine and serve']
      },
      {
        id: 5,
        imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
        title: 'Pad Thai',
        rating: 4.4,
        category: 'Thai',
        ingredients: ['Rice noodles', 'Tofu', 'Peanuts', 'Tamarind'],
        instructions: ['Soak noodles', 'Stir-fry ingredients', 'Add sauce']
      },
      {
        id: 6,
        imageUrl: 'https://images.unsplash.com/photo-1574653853027-5382a3d23c10',
        title: 'Fish Tacos',
        rating: 4.3,
        category: 'Mexican',
        ingredients: ['Fish', 'Tortillas', 'Slaw', 'Lime crema'],
        instructions: ['Cook fish', 'Warm tortillas', 'Assemble tacos']
      }
    ]
  }
};

export const SingleRecipe = {
  args: {
    books: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        title: 'Tempura',
        rating: 4.5,
        category: 'Japanese',
        ingredients: ['Shrimp', 'Vegetables', 'Tempura batter', 'Dipping sauce'],
        instructions: ['Make batter', 'Fry items', 'Serve immediately']
      }
    ]
  }
};
