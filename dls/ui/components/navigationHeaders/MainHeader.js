import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {BackButton} from '../buttons';
import fonts from '../../styleguide/fonts';
import colors from '../../styleguide/colors';
import {isArabic} from '../../../config/appConfig';
import fontsAr from '../../styleguide/fontsArabic';
import LinearGradientHeader from './LinearGradientHeader';
import {moderateScale} from '../../../helper/scaleHelper';

/**
 * Order Tracking Header
 *
 * @param headerTitle
 * @param headerSubtitle
 * @param onPressClose
 * @param onPressBack
 */

const MainHeader = ({
  headerTitle,
  onPressBack,
  titleFontStyle,
  headerHeight,
  extendedStyle,
  rightComponent
}) => (
  <LinearGradientHeader
    gradientColors={[colors.violet, colors.violet]}
    height={headerHeight || moderateScale(60)}
    extendedStyle={{
      paddingLeft: moderateScale(20),
      ...extendedStyle,
    }}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView />
      {onPressBack ? (
        <View style={{
          flexDirection: "row",
          left: moderateScale(14),
          padding: moderateScale(14)
        }}>
          <BackButton
            onPress={onPressBack}
          />
          <BackTitle
            extendedStyle={{
              alignSelf: 'center',
              paddingLeft: moderateScale(14)
            }}
            fontStyle={titleFontStyle ||
              isArabic ? fontsAr.medium2B : fonts.medium2B}>
            {headerTitle}
          </BackTitle>
        </View>) : null}
      {rightComponent ? rightComponent : null}
    </View>
  </LinearGradientHeader>
);

MainHeader.propTypes = {
  headerTitle: PropTypes.string,
  headerSubtitle: PropTypes.string,
  onPressClose: PropTypes.func,
  onPressBack: PropTypes.func,
  titleFontStyle: PropTypes.object,
  headerHeight: PropTypes.number,
  extendedStyle: PropTypes.object,
  rightComponent: PropTypes.object,
};

const BackTitle = styled.Text`
  font-family: ${props => props.fontStyle.fontFamily};
  font-style: ${props => props.fontStyle.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  letter-spacing: ${props => props.fontStyle.letterSpacing};
  font-weight: ${props => props.fontStyle.fontWeight};
  color: ${colors.white};
  padding-top: ${props =>
    props.fontStyle.paddingTop ? props.fontStyle.paddingTop : 0};
  ${props => props.extendedStyle};
`;

export default MainHeader;
