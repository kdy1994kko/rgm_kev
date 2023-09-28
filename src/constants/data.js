import images from './images';

// Signature Feasts
const wines = [ 
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

// Desserts
const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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
