import BookDetails from '~/components/organisms/BookDetails.vue';

export default {
  title: 'Organisms/BookDetails',
  component: BookDetails,
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
      description: 'Display variant',
      defaultValue: 'default'
    },
    showIngredients: {
      control: 'boolean',
      description: 'Show ingredients section',
      defaultValue: true
    },
    showInstructions: {
      control: 'boolean', 
      description: 'Show instructions section',
      defaultValue: true
    }
  }
};

export const Default = {
  args: {
    recipe: {
      imageUrl: 'https://picsum.photos/800/400',
      title: 'Classic Spaghetti Carbonara',
      rating: 4.5,
      category: 'Italian',
      ingredients: [
        '400g spaghetti',
        '200g pancetta', 
        '4 large eggs',
        '100g Pecorino Romano cheese',
        'Black pepper to taste'
      ],
      instructions: [
        'Bring a large pot of salted water to boil',
        'Cook spaghetti according to package instructions',
        'Meanwhile, cook diced pancetta until crispy',
        'Whisk eggs and grated cheese in a bowl',
        'Combine pasta with egg mixture and pancetta',
        'Season with fresh black pepper'
      ]
    },
    variant: 'default',
    showIngredients: true,
    showInstructions: true
  }
};
