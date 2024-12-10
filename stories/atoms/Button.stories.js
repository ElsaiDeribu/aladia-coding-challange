import Button from '@/components/atoms/Button.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Button text content'
    },
    variant: { 
      control: { 
        type: 'select', 
        options: ['primary', 'secondary', 'outline'] 
      },
      description: 'Button style variant'
    },
    size: { 
      control: { 
        type: 'select', 
        options: ['sm', 'md', 'lg'] 
      },
      description: 'Button size'
    },
    disabled: { 
      control: 'boolean',
      description: 'Disabled state'
    }
  }
};

export const Primary = {
  args: {
    content: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
};

export const Secondary = {
  args: {
    content: 'Secondary Button', 
    variant: 'secondary',
    size: 'md',
    disabled: false
  }
};

export const Outline = {
  args: {
    content: 'Outline Button',
    variant: 'outline', 
    size: 'md',
    disabled: false
  }
};

export const Small = {
  args: {
    content: 'Small Button',
    variant: 'primary',
    size: 'sm',
    disabled: false
  }
};

export const Large = {
  args: {
    content: 'Large Button',
    variant: 'primary',
    size: 'lg',
    disabled: false
  }
};

export const Disabled = {
  args: {
    content: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true
  }
};