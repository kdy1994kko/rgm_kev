import images from './images';

// Signature Feasts
const wines = [ 
  {
    title: 'Create Your Own Ultimate Feast',
    price: '$40.99',
    tags: 'cal | 960 - 2080',
  },
  {
    title: 'Surf & Turf Walt Favorite Shrimp & 6 Oz. Filet Mignon',
    price: '$34.48',
    tags: 'cal | 550',
  },
  {
    title: 'Grilled Lobster, Shrimp And Salmon',
    price: '$36.99',
    tags: 'cal | 930',
  },
  {
    title: 'Surf & Turf Maine Lobster Tail & 10 Oz. NY Strip',
    price: '$42.98',
    tags: 'cal | 1030',
  },
  {
    title: 'Admiral Feast',
    price: '$25.49',
    tags: 'cal | 1680',
  },
];

// Desserts
const cocktails = [
  {
    title: 'New! Strawberry Vanilla Bean Cheesecake',
    price: '$9.99',
    tags: 'cal | 760',
  },
  {
    title: 'Brownie Overboard',
    price: '$8.99',
    tags: 'cal | 1020',
  },
  {
    title: 'Chocolate Wave',
    price: '$8.49',
    tags: 'cal | 1110',
  },
  {
    title: 'Vanilla Bean Cheesecake',
    price: '$7.99',
    tags: 'cal | 690',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'J.D. Power Customer Satisfaction Award',
    subtitle: 'recognized for our commitment to customer satisfaction and has received high rankings in the annual J.D. Power Restaurant Satisfaction Study.',
  },
  {
    imgUrl: images.award01,
    title: 'Golden Chain Award',
    subtitle: 'recognized for our exceptional performance, innovation & impact on the restaurant industry.',
  },
  {
    imgUrl: images.award05,
    title: 'Food Quality & Innovation Award',
    subtitle: 'recognized for our dedication to providing high-quality seafood dishes and continuous innovation in its menu offerings.',
  },
  {
    imgUrl: images.award03,
    title: 'Seafood Sustainability Award',
    subtitle: 'recognized for our commitment to sustainable sourcing and responsible fishing practices. This award acknowledges the company efforts in protecting ocean resources.',
  },
];

export default { wines, cocktails, awards };
