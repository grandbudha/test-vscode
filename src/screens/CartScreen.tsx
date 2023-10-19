import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useStore} from '../store/store';
import {BeansType} from '../types/BeansType';
import {COLORS, SPACING} from '../theme/theme';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import HeaderBar from '../components/HeaderBar';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const cartList: BeansType[] = useStore(
    (state: any) => state.cartList as BeansType[],
  );

  //const cardPrice: number = useStore((state: any) => state.cartPrice);

  // Get the tab bar height
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />

            {cartList.length > 0 ? (
              <View style={null}>
                {cartList.map((data, index) => (
                  <TouchableOpacity key={index}>
                    <CartItem
                      item={data}
                      incrementHandler={null}
                      decrementHandler={null}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <></>
            )}
          </View>
          {/* Show payment footer */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});
export default CartScreen;
