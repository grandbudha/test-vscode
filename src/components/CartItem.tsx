import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BeansType} from '../types/BeansType';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

const styles = StyleSheet.create({
  cartItemLinearGradient: {},
  cartItemRow: {},
  cartItemImage: {},
  cartItemInfo: {},
  cartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  cartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  cartItemRoastedContainer: {},
  cartItemRoastedText: {},
  cartItemSizeRowContainer: {},
  cartItemSizeValueContainer: {},
  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 40,
    width: 100,
    borderRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.secondaryGreyHex,
  },
  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  sizePrice: {
    color: COLORS.primaryWhiteHex,
  },
  cartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_10,
  },
  cartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: 80,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: SPACING.space_4,
  },
  cartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  //
  cartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
  },
  cartItemSingleImage: {
    height: 150,
    width: 150,
    borderRadius: BORDERRADIUS.radius_20,
  },
  cartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  cartItemSingleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cartItemSingleQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

type CartItemProps = {
  item: BeansType;
  incrementHandler: any;
  decrementHandler: any;
};

const CartItem = ({item}: CartItemProps) => {
  console.log('Price length =>', item.prices[0].size);

  return (
    <View>
      {item.prices.length !== 3 ? (
        <></>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemSingleLinearGradient}>
          <View>
            <Image
              source={item.imagelinkSquare}
              style={styles.cartItemSingleImage}
            />
          </View>
          <View style={styles.cartItemSingleInfoContainer}>
            <View>
              <Text style={styles.cartItemTitle}>{item.name}</Text>
              <Text style={styles.cartItemSubtitle}>
                {item.specialIngredient}
              </Text>
            </View>
            <View style={styles.cartItemSingleSizeValueContainer}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        item.type === 'Bean'
                          ? FONTSIZE.size_12
                          : FONTSIZE.size_16,
                    },
                  ]}>
                  {item.prices[0].size}
                </Text>
              </View>
              <Text style={styles.sizeCurrency}>
                {item.prices[0].currency}
                <Text style={styles.sizePrice}>{item.prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.cartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() => {
                  /* increment */
                }}>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>

              <View style={styles.cartItemQuantityContainer}>
                <Text style={styles.cartItemQuantityText}>
                  {item.prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() => {
                  /* Decrement */
                }}>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={FONTSIZE.size_10}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default CartItem;
