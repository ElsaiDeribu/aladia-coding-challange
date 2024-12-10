import RecipeTypography from '@/components/atoms/RecipeTypography.vue';

export default {
  title: 'Atoms/RecipeTypography',
  component: RecipeTypography,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'div', 'span'],
      description: 'HTML tag to render',
      defaultValue: 'p'
    },
    variant: {
      control: 'select',
      options: ['recipe-title', 'section-title', 'ingredient', 'instruction', 'body'],
      description: 'Typography variant style',
      defaultValue: 'body'
    },
    margin: {
      control: 'select',
      options: ['none', 'normal', 'large'],
      description: 'Bottom margin size',
      defaultValue: 'normal'
    },
    content: {
      control: 'text',
      description: 'Text content',
      required: true
    },
    variantClasses: {
      control: 'text',
      description: 'Custom variant classes',
      defaultValue: ''
    },
    marginClasses: {
      control: 'text', 
      description: 'Custom margin classes',
      defaultValue: ''
    }
  }
};

export const RecipeTitle = {
  args: {
    tag: 'h1',
    variant: 'recipe-title',
    margin: 'large',
    content: 'Delicious Chocolate Cake',
    variantClasses: 'text-4xl font-bold text-gray-800',
    marginClasses: 'mb-8'
  }
};

export const SectionTitle = {
  args: {
    tag: 'h2',
    variant: 'section-title', 
    margin: 'normal',
    content: 'Ingredients',
    variantClasses: 'text-2xl font-bold text-gray-800',
    marginClasses: 'mb-6'
  }
};

export const Ingredient = {
  args: {
    tag: 'p',
    variant: 'ingredient',
    margin: 'none',
    content: '2 cups all-purpose flour',
    variantClasses: 'text-base text-gray-600',
    marginClasses: 'mb-0'
  }
};

export const Instruction = {
  args: {
    tag: 'p',
    variant: 'instruction',
    margin: 'none', 
    content: 'Mix the dry ingredients in a large bowl.',
    variantClasses: 'text-base text-gray-600',
    marginClasses: 'mb-0'
  }
};

export const Body = {
  args: {
    tag: 'p',
    variant: 'body',
    margin: 'normal',
    content: 'This recipe has been passed down through generations.',
    variantClasses: 'text-base text-gray-700',
    marginClasses: 'mb-4'
  }
};
