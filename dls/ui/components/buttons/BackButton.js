import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

import BackIcon from "../../icons/back/back.png";
import { hitSlop } from "../../../config/appConfig";
import IconComponent from "../imageComponents/IconComponent";

/**
 * Back button component
 * @param onPress
 * @param extendedStyle
 */
const BackButton = ({ onPress, extendedStyle }) => (
  <Container
    onPress={onPress}
    hitSlop={hitSlop}
    extendedStyle={extendedStyle}
    activeOpacity={0.7}
  >
    <IconComponent source={BackIcon} enbaleArabicScaleX />
  </Container>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  extendedStyle: PropTypes.object
};

const Container = styled.TouchableOpacity`
  padding-top: 14;
  padding-bottom: 14;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  ${props => props.extendedStyle}
`;

export default BackButton;
