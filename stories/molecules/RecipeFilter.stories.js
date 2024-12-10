import RecipeFilter from '@/components/molecules/RecipeFilter.vue';

export default {
  title: 'Molecules/RecipeFilter',
  component: RecipeFilter,
  tags: ['autodocs'],
  argTypes: {
    categories: {
      control: 'array',
      description: 'Array of category options to filter by',
      required: true
    }
  }
};

export const Default = {
  args: {
    categories: ['Japanese', 'Korean', 'Indian', 'Italian', 'Mexican']
  }
};

export const WithManyCategories = {
  args: {
    categories: [
      'Japanese', 
      'Korean', 
      'Indian', 
      'Italian', 
      'Mexican',
      'Thai',
      'Vietnamese',
      'French',
      'Mediterranean',
      'American'
    ]
  }
};

export const SingleCategory = {
  args: {
    categories: ['Japanese']
  }
};
