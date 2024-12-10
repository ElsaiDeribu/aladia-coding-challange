import FilterChip from '@/components/atoms/FilterChip.vue';

export default {
  title: 'Atoms/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Chip label text',
      required: true
    },
    isSelected: {
      control: 'boolean', 
      description: 'Selected state',
      defaultValue: false
    }
  }
};

export const Default = {
  args: {
    label: 'Filter Option',
    isSelected: false
  }
};

export const Selected = {
  args: {
    label: 'Selected Filter', 
    isSelected: true
  }
};