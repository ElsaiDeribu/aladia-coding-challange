import Badge from '@/components/atoms/Badge.vue';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Badge text content'
    },
    variant: {
      control: { 
        type: 'select', 
        options: ['primary', 'secondary', 'accent']
      },
      description: 'Badge style variant'
    }
  }
};

export const Primary = {
  args: {
    text: 'Primary Badge',
    variant: 'primary'
  }
};

export const Secondary = {
  args: {
    text: 'Secondary Badge',
    variant: 'secondary'
  }
};

export const Accent = {
  args: {
    text: 'Accent Badge',
    variant: 'accent'
  }
};