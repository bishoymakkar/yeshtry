import React, {Component} from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import fonts from "../../styleguide/fonts";
import colors from "../../styleguide/colors";
import fontsAr from "../../styleguide/fontsArabic";
import ModalComponent from "./Modal";
import {moderateScale} from "../../../helper/scaleHelper";
import {isArabic, PrimaryGradientColor} from "../../../config/appConfig";
import LinearGradient from "react-native-linear-gradient";
/**
 * Warning modal
 *
 * @param extendedStyle
 * @param visibility
 * @param modalTitle
 * @param modalText
 * @param buttonText
 */
export default class PointsModal extends Component {
  render() {
    const {extendedStyle, visibility, onPressBack} = this.props;
    return (
      <ModalComponent
        visibility={visibility}
        onBackButtonPress={onPressBack}
        modalStyle={{justifyContent: "center"}}
        onBackdropPress={onPressBack}
        content={
          <Container extendedStyle={extendedStyle}>
            <OutsideCircle
              backgroundColor={colors.lightShadow}
              width={moderateScale(160)}
              height={moderateScale(160)}
            >
              <LinearGradient
                colors={PrimaryGradientColor}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={{
                  height: 150, width: 150,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: 'transparent',
                  alignSelf: 'center'
                }}
              >
                <View style={{
                  padding: moderateScale(35)
                }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    fontStyle={
                      isArabic ? fontsAr.large2Bb : fonts.large2Bb
                    }
                    color={colors.white}>
                    {'100'}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    fontStyle={
                      isArabic ? fontsAr.large1R : fonts.large1R
                    }
                    color={colors.white}>
                    {'Points'}
                  </Text>
                </View>
              </LinearGradient>
            </OutsideCircle>
          </Container>
        }
      />
    );
  }
}

PointsModal.propTypes = {
  extendedStyle: PropTypes.object,
  iconSource: PropTypes.number.isRequired,
  handleVisibility: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string
};

const Container = styled.View`
  margin-right: ${moderateScale(24)};
  margin-left: ${moderateScale(24)};
  padding: ${moderateScale(24)}px;
  border-radius: 4;
  ${props => props.extendedStyle};
`;
const View = styled.View``;

const OutsideCircle = styled.View`
background-color: ${props => props.backgroundColor};
width: ${props => props.width};
height: ${props => props.height};
border-radius: ${moderateScale(160)};
border-color: ${props => props.borderColor ? props.borderColor : props.backgroundColor};
border-width: ${props => props.borderColor ? moderateScale(1) : 0};
align-items: center;
align-self: center;
justify-content: center;
`;

const Text = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
`;
