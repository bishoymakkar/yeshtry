import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';
import * as Animatable from "react-native-animatable";
import QRCodeScanner from "react-native-qrcode-scanner";

import colors from '../../../../dls/ui/styleguide/colors';
import strings from '../../../../dls/localization/localize';
import {Loading} from '../../../../dls/ui/components/loaders';
import bagIcon from "../../../../dls/ui/icons/bagWhite/bag.png";
import lightIcon from "../../../../dls/ui/icons/light/light.png";
import {moderateScale} from '../../../../dls/helper/scaleHelper';
import {OrderTrackingHeader} from '../../../../dls/ui/components/navigationHeaders';
import headerIcon from "../../../../dls/ui/icons/headerElement/headerElement.png";
import IconComponent from '../../../../dls/ui/components/imageComponents/IconComponent';
import CircularButton from '../../../../dls/ui/components/buttons/CircularButton';
import {ErrorModal} from '../../../../dls/ui/components/modals';

const {height, width} = Dimensions.get('screen');

const SCREEN_WIDTH = width;

@inject('productsStore')
@observer
class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: RNCamera.Constants.FlashMode.off,
      errorModal: false,
    };
  }

  onSuccess = resp => {
    if (resp.data == this.props.product.id) {
      this.props.navigation.goBack();
      this.props.productsStore.setPointsPopup(true);
    } else {
      this.setState({errorModal: true})
    }
  };

  PressFlash = () => {
    if (this.state.flash === RNCamera.Constants.FlashMode.off) {
      this.setState({flash: RNCamera.Constants.FlashMode.torch})
    } else {
      this.setState({flash: RNCamera.Constants.FlashMode.off})
    }
  }
  onPressBack = () => {
    this.props.navigation.goBack();
  };

  makeSlideOutTranslation(translationType) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: SCREEN_WIDTH * + 0.3
      }
    };
  }

  render() {
    const {
      isLoading,
      errorModal
    } = this.state;

    if (isLoading) return <Loading />;
    return (
      <Container>
        <ErrorModal
          visibility={errorModal}
          onPressBack={() => {this.setState({errorModal: false})}}
          onPress={() => {this.setState({errorModal: false})}}
          modalTitle={strings.errorContent}
          buttonText={strings.ok}
        />
        <OrderTrackingHeader
          showGradient={true}
          headerTitle={strings.scanQr}
          headerHeight={moderateScale(100)}
          rightComponent={
            <View>
              <IconComponent
                source={headerIcon}
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: moderateScale(250),
                  height: moderateScale(450),
                }}
              >
              </IconComponent>
              <CircularButton
                backgroundColor={"transparent"}
                onPress={() => {}}
                borderColor={"transparent"}>
                <IconComponent
                  source={bagIcon} />
              </CircularButton>
            </View>
          }
          onPressBack={this.onPressBack}
        />
        <View
          style={{
            flex: 1,
          }}>
          <QRCodeScanner
            ref={node => {
              this.scanner = node;
            }}
            reactivate
            showMarker
            fadeIn={false}
            customMarker={
              <View style={styles.rectangleContainer}>
                <View style={styles.topOverlay} />
                <View style={{flexDirection: "row"}}>
                  <View style={styles.leftAndRightOverlay} />

                  <View style={styles.rectangle}>
                    <Animatable.View
                      style={styles.scanBar}
                      direction="alternate-reverse"
                      iterationCount="infinite"
                      duration={1500}
                      easing="linear"
                      animation={this.makeSlideOutTranslation(
                        "translateY",
                        SCREEN_WIDTH * + 0.5
                      )}
                    />
                  </View>
                  <View style={styles.leftAndRightOverlay} />
                </View>
                <View style={styles.bottomOverlay} />
              </View>
            }
            cameraStyle={{
              height: moderateScale(height * 0.8),
              backgroundColor: colors.greyish,
            }}
            onRead={this.onSuccess}
            flashMode={this.state.flash}
          />
        </View>
        <Button
          width={moderateScale(72)}
          height={moderateScale(72)}
          onPress={this.PressFlash}
        >
          <IconComponent
            source={lightIcon}
            style={{
              width: moderateScale(72),
              height: moderateScale(72),
            }}
          />
        </Button>
      </Container>
    );
  }
}
ScanScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = colors.waterBlue;

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = colors.white;

const styles = {
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: moderateScale(20),
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25,
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
  },

  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor,
  }
};
const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const Button = styled.TouchableOpacity`
width: ${props => props.width};
height: ${props => props.height};
align-items: center;
align-self: center;
justify-content: center;
`;

const Text = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
`;

export default ScanScreen;
