import SearchInput from '@/components/atoms/SearchInput.vue';

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Input value (v-model)',
      required: true
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: 'Search...'
    }
  }
};

export const Default = {
  args: {
    modelValue: '',
    placeholder: 'Search...'
  }
};

export const WithValue = {
  args: {
    modelValue: 'Recipe search',
    placeholder: 'Search recipes...'
  }
};

export const CustomPlaceholder = {
  args: {
    modelValue: '',
    placeholder: 'Enter search term...'
  }
};
