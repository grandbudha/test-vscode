import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BeansType} from '../types/BeansType';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import {useStore} from '../store/store';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  //Add route later
  const item = useStore((state: any) =>
    route.params.type === 'Coffee' ? state.coffeeList : state.beanList,
  )[route.params.index] as BeansType;

  // state
  const [price, setPrice] = useState(item.prices[0]);
  const [fullDescription, setFullDescription] = useState(false);

  /**
   * Add item to cart
   * @param item : BeansType
   */
  const addItemToCart = (item: BeansType) => {
    console.log('DetailsScreen => ', item);
  };

  /**
   * Back button handler
   */
  const backHandler = () => {
    console.log('Calling back handler');
    navigation.pop();
  };

  /**
   * toggle favourites handler
   */
  const toggleFavourite = (favourite: boolean, type: string, id: string) => {};

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <ImageBackgroundInfo
          item={item}
          isBackEnabled={true}
          backButtonHandler={backHandler}
          toggleFavourite={toggleFavourite}
        />

        <View style={styles.footterInfoArea}>
          <Text style={styles.infoTitle}>Description</Text>
          {fullDescription ? (
            <TouchableWithoutFeedback
              onPress={() => setFullDescription(prev => !prev)}>
              <Text style={styles.descriptionText}>{item.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => setFullDescription(prev => !prev)}>
              <Text numberOfLines={3} style={styles.descriptionText}>
                {item.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.infoTitle}>Size</Text>
          <View style={styles.sizeOuterContainer}>
            {item.prices.map((data, index) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => setPrice(data)}
                style={[
                  styles.sizeBox,
                  {
                    borderColor:
                      data.size === price.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryDarkGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        item.type === 'Bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        data.size === price.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Payment Footer */}
        <PaymentFooter
          currency={price.currency}
          price={price.price}
          buttonTitle="Add to Cart"
          buttonHandler={() => {
            // handle actions here
          }}
        />
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
    justifyContent: 'space-between',
  },
  footterInfoArea: {
    padding: SPACING.space_20,
  },
  infoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  descriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_30,
  },
  sizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default DetailsScreen;
