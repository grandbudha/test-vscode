import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface PaymentFooterProps {
  price: string;
  currency: string;
  buttonTitle: string;
  buttonHandler: any;
}

const PaymentFooter = ({
  price,
  currency,
  buttonTitle,
  buttonHandler,
}: PaymentFooterProps) => {
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceText}>
          {currency} <Text style={styles.price}>{price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => buttonHandler()}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  priceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_20,
    padding: SPACING.space_10,
    marginVertical: SPACING.space_2,
  },
  priceContainer: {
    alignItems: 'center',
    width: 100,
  },
  priceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
  },
  priceText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.secondaryLightGreyHex,
  },
  price: {
    color: COLORS.primaryWhiteHex,
  },
  payButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 1.5,
    borderRadius: BORDERRADIUS.radius_20,
  },
  buttonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});
export default PaymentFooter;
