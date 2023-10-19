import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar = ({title}: HeaderBarProps) => {
  return (
    <View style={styles.headerContainer}>
      <GradientBGIcon
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
        name="menu"
      />
      <Text style={styles.headerText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});
export default HeaderBar;
