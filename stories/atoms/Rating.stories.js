import Rating from '@/components/atoms/Rating.vue';

export default {
  title: 'Atoms/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 1 }, // Changed step to 1 since component only accepts integers
      description: 'Rating value (0-5)',
      required: true,
      validator: value => value >= 0 && value <= 5
    }
  }
};

export const FiveStars = {
  args: {
    value: 5
  }
};

export const ThreeStars = { // Changed from ThreeAndHalfStars since component only accepts integers
  args: {
    value: 3
  }
};

export const NoStars = {
  args: {
    value: 0
  }
}; 