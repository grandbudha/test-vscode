import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BeansType} from '../types/BeansType';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

type ImageBackgroundInfoProps = {
  item: BeansType;
  isBackEnabled: boolean;
  backButtonHandler: () => void;
  toggleFavourite: (favourite: boolean, type: string, id: string) => void;
};

const ImageBackgroundInfo = ({
  item,
  isBackEnabled,
  backButtonHandler,
  toggleFavourite,
}: ImageBackgroundInfoProps) => {
  return (
    <View>
      <ImageBackground
        source={item.imagelinkPortrait}
        style={styles.itemBackgroundImage}>
        {isBackEnabled ? (
          <View style={styles.imageHeaderBarContainerWithBack}>
            <TouchableOpacity onPress={() => backButtonHandler()}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                toggleFavourite(item.favourite, item.type, item.id)
              }>
              <GradientBGIcon
                name="like"
                color={
                  item.favourite
                    ? COLORS.primaryRedHex
                    : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageHeaderBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() =>
                toggleFavourite(item.favourite, item.type, item.id)
              }>
              <GradientBGIcon
                name="like"
                color={
                  item.favourite
                    ? COLORS.primaryRedHex
                    : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* Common */}
        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View>
                <Text style={styles.itemTitleText}>{item.name}</Text>
                <Text style={styles.itemSubtitleText}>
                  {item.specialIngredient}
                </Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.properFirst}>
                  <CustomIcon
                    name={item.type == 'Bean' ? 'bean' : 'beans'}
                    size={
                      item.type == 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24
                    }
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {
                        marginTop:
                          item.type == 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {item.type}
                  </Text>
                </View>
                <View style={styles.properFirst}>
                  <CustomIcon
                    name={item.type == 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.propertyTextLast}>
                    {item.ingredients}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainerRow}>
              <View style={styles.ratingContainer}>
                <CustomIcon
                  name={'star'}
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.ratingText}>{item.averageRating}</Text>
                <Text style={styles.ratingCountText}>
                  ({item.ratingsCount})
                </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{item.roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  imageHeaderBarContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageHeaderBarContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  imageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  infoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitleText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  itemSubtitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },

  itemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  properFirst: {
    height: 55,
    width: 55,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  propertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  propertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ratingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  roastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
});
export default ImageBackgroundInfo;
