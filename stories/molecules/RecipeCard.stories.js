import RecipeCard from '@/components/molecules/RecipeCard.vue';

export default {
  title: 'Molecules/RecipeCard',
  component: RecipeCard,
  tags: ['autodocs'],
  argTypes: {
    recipe: {
      control: 'object',
      description: 'Recipe data object',
      required: true
    },
    variant: {
      control: 'select',
      options: ['default', 'compact', 'detailed'],
      description: 'Card display variant',
      defaultValue: 'default'
    },
    padding: {
      control: 'select',
      options: ['none', 'small', 'normal', 'large'],
      description: 'Card padding size',
      defaultValue: 'normal'
    },
    margin: {
      control: 'select', 
      options: ['none', 'small', 'normal', 'large'],
      description: 'Card margin size',
      defaultValue: 'normal'
    }
  }
};

export const Default = {
  args: {
    recipe: {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      title: 'Tempura',
      rating: 4.5,
      category: 'Japanese',
      ingredients: [
        'Shrimp',
        'Vegetables', 
        'Tempura batter',
        'Dipping sauce'
      ],
      instructions: ['Make batter', 'Fry items', 'Serve immediately']
    },
    variant: 'default',
    padding: 'normal',
    margin: 'normal'
  }
};

export const CompactWithSmallPadding = {
  args: {
    recipe: {
      id: 29,
      imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87',
      title: 'Chicken Tikka',
      rating: 4.8,
      category: 'Indian',
      ingredients: ['Chicken', 'Yogurt', 'Spices', 'Lime'],
      instructions: ['Marinate chicken', 'Grill', 'Serve with naan']
    },
    variant: 'compact',
    padding: 'small',
    margin: 'small'
  }
};

export const DetailedWithLargePadding = {
  args: {
    recipe: {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
      title: 'Traditional Korean Bibimbap with Seasonal Vegetables',
      rating: 4.6,
      category: 'Korean',
      ingredients: ['Rice', 'Vegetables', 'Beef', 'Gochujang'],
      instructions: [
        'Prepare toppings',
        'Arrange in bowl',
        'Mix before eating'
      ]
    },
    variant: 'detailed',
    padding: 'large',
    margin: 'large'
  }
};

export const DefaultWithNoPadding = {
  args: {
    recipe: {
      id: 30,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      title: 'Miso Soup',
      rating: 4.3,
      category: 'Japanese',
      ingredients: ['Dashi', 'Miso paste', 'Tofu', 'Seaweed'],
      instructions: ['Make dashi', 'Add miso', 'Add toppings']
    },
    variant: 'default',
    padding: 'none',
    margin: 'none'
  }
};
