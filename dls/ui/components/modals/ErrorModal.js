import React, { Component } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import fonts from "../../styleguide/fonts";
import colors from "../../styleguide/colors";
import fontsAr from "../../styleguide/fontsArabic";
import ModalComponent from "./Modal";
import { moderateScale } from "../../../helper/scaleHelper";
import { isArabic } from "../../../config/appConfig";
import { OrangeButton } from "../buttons";
import IconComponent from "../imageComponents/IconComponent";
import warningRed75 from "../../icons/redError42/redError42.png";
/**
 * Warning modal
 *
 * @param extendedStyle
 * @param visibility
 * @param modalTitle
 * @param modalText
 * @param buttonText
 */
export default class ErrorModal extends Component {
  render() {
    const { extendedStyle,visibility,onPressBack, onPress, modalTitle, buttonText, modalText } = this.props;
    return (
      <ModalComponent
        visibility={visibility}
        onBackButtonPress={onPressBack}
        modalStyle={{ justifyContent: "center" }}
        onBackdropPress={onPressBack}
        content={
          <Container extendedStyle={extendedStyle}>
            <IconComponent
              source={warningRed75}
              style={{ alignSelf: "center" }}
            />
            <ModalText
              fontStyle={isArabic ? fontsAr.medium2B : fonts.medium2B}
              color={colors.darkBlueGrey}
              extendedStyle={{ paddingTop: moderateScale(14) }}
            >
              {modalTitle}
            </ModalText>
            <ModalText
              fontStyle={isArabic ? fontsAr.regularR : fonts.regularR}
              color={colors.brownGrey}
            >
              {modalText}
            </ModalText>
            <OrangeButton
              fontStyle={isArabic ? fontsAr.regularB : fonts.regularB}
              onPress={onPress}
            >
              {buttonText}
            </OrangeButton>
          </Container>
        }
      />
    );
  }
}

ErrorModal.propTypes = {
  extendedStyle: PropTypes.object,
  iconSource: PropTypes.number.isRequired,
  handleVisibility: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string
};

const Container = styled.View`
  background-color: ${colors.white};
  margin-right: ${moderateScale(24)};
  margin-left: ${moderateScale(24)};
  padding: ${moderateScale(24)}px;
  border-radius: 4;
  ${props => props.extendedStyle};
`;

const ModalText = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
  text-align: center;
  ${props => props.extendedStyle};
`;
