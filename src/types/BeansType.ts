import {ImageProps} from 'react-native';

export type BeansType = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelinkSquare: ImageProps;
  imagelinkPortrait: ImageProps;
  ingredients: string;
  specialIngredient: string;
  prices: BeanPricesType[];
  averageRating: number;
  ratingsCount: string;
  favourite: boolean;
  type: string;
  index: number;
};

export type BeanPricesType = {
  size: string;
  price: string;
  currency: string;
  quantity?: number;
};
