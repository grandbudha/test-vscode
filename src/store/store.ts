// Replace AsyncStorage with => https://github.com/mrousavy/react-native-mmkv/tree/master
import AsyncStorage from '@react-native-async-storage/async-storage';

import {produce} from 'immer';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';
import {BeanPricesType, BeansType} from '../types/BeansType';

export const useStore = create(
  persist(
    (set, get) => ({
      coffeeList: CoffeeData,
      beansList: BeansData,
      cartPrice: 0,
      favoritesList: [],
      cartList: [] as BeansType[],
      orderHistoryList: [],
      addToCart: (cartItem: BeansType) =>
        set(
          produce(state => {
            let isFound = false;
            for (let i = 0; i < state.cartList.length; ++i) {
              if (state.cartList[i].id === cartItem.id) {
                isFound = true;
                let size = false;
                for (let j = 0; j < state.cartList[i].prices.length; ++i) {
                  if (
                    state.cartList[i].prices[j].size === cartItem.prices[0].size
                  ) {
                    size = true;
                    state.cartList[i].prices[j].quantity++;
                    break;
                  }
                }

                if (size === false) {
                  state.cartList[i].prices.push(cartItem.prices[0]);
                }

                state.cartList[i].prices.sort(
                  (a: BeanPricesType, b: BeanPricesType) => {
                    return a.size > b.size ? -1 : a.size < b.size ? 1 : 0;
                  },
                );
              }
            }

            if (isFound === false) {
              state.cartList.push(cartItem);
            }
          }),
        ),
      calculateCartPrice: () => {
        set(produce(state => {}));
      },
    }),
    {
      name: 'coffee-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
