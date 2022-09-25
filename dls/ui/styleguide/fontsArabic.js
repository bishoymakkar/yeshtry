import {StyleSheet, Platform} from 'react-native';
import {moderateScale} from '../../helper/scaleHelper';

const textStyles = StyleSheet.create({
  title1Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 26,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(26 / 2) : 0,
    textAlign: 'left',
  },
  title1B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 26,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(26 / 2) : 0,
    textAlign: 'left',
  },
  title1R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 26,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(26 / 2) : 0,
    textAlign: 'left',
  },
  title1L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 26,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(26 / 2) : 0,
    textAlign: 'left',
  },
  title2Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(24 / 2) : 0,
    textAlign: 'left',
  },
  title2B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(24 / 2) : 0,
    textAlign: 'left',
  },
  title2R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(24 / 2) : 0,
    textAlign: 'left',
  },
  title2L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(24 / 2) : 0,
    textAlign: 'left',
  },
  large1Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 22,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(22 / 2) : 0,
    textAlign: 'left',
  },
  large1B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 22,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(22 / 2) : 0,
    textAlign: 'left',
  },
  large1R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 22,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(22 / 2) : 0,
    textAlign: 'left',
  },
  large1L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 22,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(22 / 2) : 0,
    textAlign: 'left',
  },
  large2Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(20 / 2) : 0,
    textAlign: 'left',
  },
  large2B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(20 / 2) : 0,
    textAlign: 'left',
  },
  large2R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(20 / 2) : 0,
    textAlign: 'left',
  },
  large2L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(20 / 2) : 0,
    textAlign: 'left',
  },
  medium1Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(18 / 2) : 0,
    textAlign: 'left',
  },
  medium1B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(18 / 2) : 0,
    textAlign: 'left',
    lineHeight: Platform.OS === 'android' ? moderateScale(26) : 0,
  },
  medium1R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(18 / 2) : 0,
    textAlign: 'left',
  },
  medium1L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(18 / 2) : 0,
    textAlign: 'left',
  },
  medium2Bb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(16 / 2) : 0,
    textAlign: 'left',
  },
  medium2B: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(16 / 2) : 0,
    textAlign: 'left',
  },
  medium2R: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(16 / 2) : 0,
    textAlign: 'left',
  },
  medium2L: {
    fontFamily: 'Tajawal-Light',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(16 / 2) : 0,
    textAlign: 'left',
  },
  regularBb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(14 / 2) : 0,
    textAlign: 'left',
  },
  regularB: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(14 / 2) : 0,
    textAlign: 'left',
  },
  regularR: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    padding: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(14 / 2) : 0, // to center text vertically
    textAlign: 'left',
    lineHeight: Platform.OS === 'android' ? moderateScale(22) : 0,
  },
  regularL: {
    fontFamily: 'Tajawal-Light',
    fontSize: 14,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(14 / 2) : 0,
    textAlign: 'left',
  },
  smallBb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 12,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  smallB: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 12,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  smallR: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  smallL: {
    fontFamily: 'Tajawal-Light',
    fontSize: 12,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xSmallBb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 10,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xSmallB: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 10,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xSmallR: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xSmallL: {
    fontFamily: 'Tajawal-Light',
    fontSize: 10,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xxSmallBb: {
    fontFamily: 'Tajawal-Black',
    fontSize: 8,
    fontWeight: Platform.OS === 'ios' ? '900' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xxSmallB: {
    fontFamily: 'Tajawal-Bold',
    fontSize: 8,
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xxSmallR: {
    fontFamily: 'Tajawal-Regular',
    fontSize: 8,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
  xxSmallL: {
    fontFamily: 'Tajawal-Light',
    fontSize: 8,
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    paddingTop: Platform.OS === 'ios' ? moderateScale(12 / 2) : 0,
    textAlign: 'left',
  },
});

export default textStyles;
