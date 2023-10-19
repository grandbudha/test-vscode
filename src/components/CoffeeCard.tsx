import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';
import {BeansType} from '../types/BeansType';

type CoffeeCardProps = {
  item: BeansType;
  buttonPressHandler: (obj: BeansType) => void;
};

const CoffeeCard = ({item, buttonPressHandler}: CoffeeCardProps) => {
  // const imageIcon = require(item.imagelinkSquare);

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.cardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
      <ImageBackground
        source={item.imagelinkSquare}
        style={styles.cardImageBG}
        resizeMode="cover">
        <View style={styles.cardRatingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.cardRatingText}>{item.averageRating}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.specialIngredient}</Text>
      <View style={styles.cardFooterRow}>
        <Text style={styles.cardPriceCurrency}>
          $ <Text style={styles.cardPrice}>{item.prices[2].price}</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            buttonPressHandler(item);
          }}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const styles = StyleSheet.create({
  cardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_15,
  },
  cardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  cardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderBottomRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  cardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14,
  },
  cardTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
  },
  cardSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },
  cardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_18,
  },
  cardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});
export default CoffeeCard;
