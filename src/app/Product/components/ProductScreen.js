import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import {SafeAreaView} from 'react-native-safe-area-context';

import fonts from '../../../../dls/ui/styleguide/fonts';
import colors from '../../../../dls/ui/styleguide/colors';
import strings from '../../../../dls/localization/localize';
import {Loading} from '../../../../dls/ui/components/loaders';
import fontsAr from '../../../../dls/ui/styleguide/fontsArabic';
import bagIcon from "../../../../dls/ui/icons/bagWhite/bag.png";
import blueQr from "../../../../dls/ui/icons/blueQr/blueQr.png";
import {moderateScale} from '../../../../dls/helper/scaleHelper';
import {ImageComponent} from '../../../../dls/ui/components/imageComponents';
import recieptBlue from "../../../../dls/ui/icons/recieptBlue/receiptBlue.png";
import {isArabic, PrimaryGradientColor} from '../../../../dls/config/appConfig';
import CircularButton from '../../../../dls/ui/components/buttons/CircularButton';
import headerIcon from "../../../../dls/ui/icons/headerElement/headerElement.png";
import {OrderTrackingHeader} from '../../../../dls/ui/components/navigationHeaders';
import IconComponent from '../../../../dls/ui/components/imageComponents/IconComponent';
import PointsModal from '../../../../dls/ui/components/modals/PointsModal';

@inject('productsStore')
@observer
class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      selectedColor: colors.darkRed,
      selectedSize: 'S',
      showPoints: props.productsStore.pointsPopup,
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.setState({showPoints: this.props.productsStore.pointsPopup});
    });
  }


  onPressColor = (color) => {
    this.setState({
      selectedColor: color
    })
  };

  onPressSize = (size) => {
    this.setState({
      selectedSize: size
    })
  };


  onPressScan = () => {
    this.props.navigation.navigate('Scan', {
      product: this.props.product
    });
  };

  onPressBack = () => {
    this.props.navigation.goBack();
  };

  onPressBackPoints = () => {
    this.setState({showPoints: false})
    this.props.productsStore.setPointsPopup(false);
  }

  render() {
    const {product} = this.props;
    const {isLoading, selectedColor, showPoints, selectedSize} = this.state;
    if (isLoading) return <Loading />;
    return (
      <>
        <SafeAreaView edges={['bottom', 'left', 'right']} style={{flex: 1}}>
          <Container>
            <PointsModal
              visibility={showPoints}
              onPressBack={this.onPressBackPoints}
              modalTitle={strings.errorContent}
              buttonText={strings.ok}
            />
            <OrderTrackingHeader
              showGradient={true}
              headerTitle={strings.productDetails}
              headerHeight={moderateScale(100)}
              rightComponent={
                <Column>
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
                </Column>
              }
              onPressBack={this.onPressBack}
            />
            <Body
              contentContainerStyle={{
                alignItems: 'center'
              }}>
              <Row style={{
                paddingVertical: moderateScale(14)
              }}>
                <ImageComponent
                  uri={product.image_url}
                  style={{
                    borderColor: colors.veryLightPink,
                    borderWidth: 0.5,
                    borderRadius: moderateScale(25),
                    width: moderateScale(330),
                    height: moderateScale(300)
                  }} />
              </Row>
              <Row style={{flex: 1, paddingHorizontal: moderateScale(24)}}>
                <Text
                  style={{flex: 1}}
                  fontStyle={
                    isArabic ? fontsAr.medium2R : fonts.medium2R
                  }
                  color={colors.black}>
                  {product.name}
                </Text>
                <Column>
                  <Text
                    fontStyle={
                      isArabic ? fontsAr.medium2R : fonts.medium2R
                    }
                    color={colors.blue}>
                    {"(200)"}
                  </Text>
                  <Text
                    style={{
                      textDecorationLine: 'line-through',
                      justifyContent: "flex-end",
                    }}
                    fontStyle={
                      isArabic ? fontsAr.medium2R : fonts.medium2R
                    }
                    color={colors.greyish}>
                    {"400 EGP"}
                  </Text>
                </Column>
              </Row>
              <Row style={{flex: 1, paddingHorizontal: moderateScale(24)}}>
                <Text
                  fontStyle={
                    isArabic ? fontsAr.regularR : fonts.regularR
                  }
                  color={colors.greyish}>
                  {product.description}
                </Text>
              </Row>
              <Column style={{
                flex: 1,
                paddingVertical: moderateScale(10),
                paddingHorizontal: moderateScale(28),
                alignSelf: 'flex-start'
              }}>
                <Text
                  fontStyle={
                    isArabic ? fontsAr.medium2R : fonts.medium2R
                  }
                  color={colors.blue}>
                  {strings.color}
                </Text>
                <Row>
                  <Column>
                    <Circle
                      onPress={() => this.onPressColor(colors.darkRed)}
                      backgroundColor={colors.white}
                      borderColor={selectedColor == colors.darkRed ? colors.blue : null}
                      width={moderateScale(30)}
                      height={moderateScale(30)}
                    >
                      <InsideCircle
                        backgroundColor={colors.darkRed}
                        width={moderateScale(25)}
                        height={moderateScale(25)}
                      />
                    </Circle>
                  </Column>
                  <Column style={{
                    paddingHorizontal: moderateScale(5)
                  }}>
                    <Circle
                      onPress={() => this.onPressColor(colors.black)}
                      backgroundColor={colors.white}
                      borderColor={selectedColor == colors.black ? colors.blue : null}
                      width={moderateScale(30)}
                      height={moderateScale(30)}
                    >
                      <InsideCircle
                        backgroundColor={colors.black}
                        width={moderateScale(25)}
                        height={moderateScale(25)}
                      />
                    </Circle>
                  </Column>
                  <Column>
                    <Circle
                      onPress={() => this.onPressColor(colors.blue)}
                      backgroundColor={colors.white}
                      borderColor={selectedColor == colors.blue ? colors.blue : null}
                      width={moderateScale(30)}
                      height={moderateScale(30)}
                    >
                      <InsideCircle
                        backgroundColor={colors.blue}
                        width={moderateScale(25)}
                        height={moderateScale(25)}
                      />
                    </Circle>
                  </Column>
                  <Column style={{
                    paddingHorizontal: moderateScale(5)
                  }}>
                    <Circle
                      onPress={() => this.onPressColor(colors.yellow)}
                      backgroundColor={colors.white}
                      borderColor={selectedColor == colors.yellow ? colors.blue : null}
                      width={moderateScale(30)}
                      height={moderateScale(30)}
                    >
                      <InsideCircle
                        backgroundColor={colors.yellow}
                        width={moderateScale(25)}
                        height={moderateScale(25)}
                      />
                    </Circle>
                  </Column>
                </Row>
              </Column>
              <Column style={{
                flex: 1,
                paddingVertical: moderateScale(20),
                paddingHorizontal: moderateScale(28),
                alignSelf: 'flex-start'
              }}>
                <Text
                  fontStyle={
                    isArabic ? fontsAr.medium2R : fonts.medium2R
                  }
                  color={colors.blue}>
                  {strings.size}
                </Text>
                <Row>
                  <Column>
                    <LinearGradient
                      colors={selectedSize === 'S' ? PrimaryGradientColor : ['transparent', 'transparent']}
                      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                      style={{
                        height: 45, width: 70,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Circle
                        onPress={() => this.onPressSize('S')}
                        backgroundColor={colors.white}
                        borderColor={selectedSize !== 'S' ? colors.greyish : null}
                        width={65}
                        height={40}
                      >
                        <Text
                          fontStyle={
                            isArabic ? fontsAr.regularR : fonts.regularR
                          }
                          color={colors.greyish}>
                          {'S'}
                        </Text>
                      </Circle>
                    </LinearGradient>
                  </Column>
                  <Column style={{
                    paddingHorizontal: moderateScale(5),
                  }}>
                    <LinearGradient
                      colors={selectedSize === 'M' ? PrimaryGradientColor : ['transparent', 'transparent']}
                      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                      style={{
                        height: 45, width: 70,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Circle
                        onPress={() => this.onPressSize('M')}
                        backgroundColor={colors.white}
                        borderColor={selectedSize !== 'M' ? colors.greyish : null}
                        width={65}
                        height={40}
                      >
                        <Text
                          fontStyle={
                            isArabic ? fontsAr.regularR : fonts.regularR
                          }
                          color={colors.greyish}>
                          {'M'}
                        </Text>
                      </Circle>
                    </LinearGradient>
                  </Column>
                  <Column>
                    <LinearGradient
                      colors={selectedSize === 'L' ? PrimaryGradientColor : ['transparent', 'transparent']}
                      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                      style={{
                        height: 45, width: 70,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Circle
                        onPress={() => this.onPressSize('L')}
                        backgroundColor={colors.white}
                        borderColor={selectedSize !== 'L' ? colors.greyish : null}
                        width={65}
                        height={40}
                      >
                        <Text
                          fontStyle={
                            isArabic ? fontsAr.regularR : fonts.regularR
                          }
                          color={colors.greyish}>
                          {'L'}
                        </Text>
                      </Circle>
                    </LinearGradient>
                  </Column>
                </Row>
              </Column>
              <Column style={{
                paddingHorizontal: moderateScale(28),
                paddingVertical: moderateScale(15),
              }}>
                <Row>
                  <Row style={{flex: 1}}>
                    <IconComponent style={{
                      width: moderateScale(30),
                      height: moderateScale(30),
                    }} source={blueQr} />
                    <Column style={{
                      paddingHorizontal: moderateScale(10),
                    }}>
                      <Text
                        fontStyle={
                          isArabic ? fontsAr.regularR : fonts.regularR
                        }
                        color={colors.blue}>
                        {strings.scan}
                      </Text>
                      <Text
                        fontStyle={
                          isArabic ? fontsAr.regularR : fonts.regularR
                        }
                        color={colors.black}>
                        {strings.andGet100}
                      </Text>
                    </Column>
                  </Row>
                  <Row style={{
                    alignSelf: 'flex-end'
                  }}>
                    <LinearGradient
                      colors={PrimaryGradientColor}
                      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                      style={{
                        height: 40, width: 100,
                        borderRadius: 8,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <Button
                        width={moderateScale(100)}
                        height={moderateScale(40)}
                        onPress={this.onPressScan}
                      >
                        <Text
                          fontStyle={
                            isArabic ? fontsAr.regularR : fonts.regularR
                          }
                          color={colors.white}>
                          {strings.scan}
                        </Text>
                      </Button>
                    </LinearGradient>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <IconComponent style={{
                      width: moderateScale(25),
                      height: moderateScale(30),
                    }} source={recieptBlue} />
                    <Column style={{
                      paddingHorizontal: moderateScale(10),
                    }}>
                      <Text
                        fontStyle={
                          isArabic ? fontsAr.regularR : fonts.regularR
                        }
                        color={colors.blue}>
                        {strings.buyAndSubmit}
                      </Text>
                      <Text
                        fontStyle={
                          isArabic ? fontsAr.regularR : fonts.regularR
                        }
                        color={colors.black}>
                        {strings.theReceiptFor}
                      </Text>
                    </Column>
                  </Row>
                  <LinearGradient
                    colors={PrimaryGradientColor}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{
                      height: 40, width: 100,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: 'transparent',
                      alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <Button
                      width={moderateScale(100)}
                      height={moderateScale(40)}
                    >
                      <Text
                        fontStyle={
                          isArabic ? fontsAr.regularR : fonts.regularR
                        }
                        color={colors.white}>
                        {strings.addToCart}
                      </Text>
                    </Button>
                  </LinearGradient>
                </Row>
              </Column>
            </Body>
          </Container>
        </SafeAreaView>
      </>
    );
  }
}

ProductScreen.propTypes = {
  orderTrackingStatuses: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const Body = styled.ScrollView`
background-color: ${colors.white};
margin-top: -15;
border-radius: ${moderateScale(27)};
padding: ${moderateScale(14)}px;
box-shadow: 0px -4px 17px rgba(255, 255, 255, 0.25);
`;

const Text = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
`;

const Row = styled.View`
  flex-direction: row;
`;

const Circle = styled.TouchableOpacity`
background-color: ${props => props.backgroundColor};
width: ${props => props.width};
height: ${props => props.height};
border-radius: ${moderateScale(22)};
border-color: ${props => props.borderColor ? props.borderColor : props.backgroundColor};
border-width: ${props => props.borderColor ? moderateScale(1) : 0};
align-items: center;
align-self: center;
justify-content: center;
`;

const InsideCircle = styled.View`
background-color: ${props => props.backgroundColor};
width: ${props => props.width};
height: ${props => props.height};
border-radius: ${moderateScale(22)};
border-color: ${props => props.borderColor ? props.borderColor : props.backgroundColor};
border-width: ${props => props.borderColor ? moderateScale(1) : 0};
align-items: center;
align-self: center;
justify-content: center;
`;

const Button = styled.TouchableOpacity`
width: ${props => props.width};
height: ${props => props.height};
align-items: center;
align-self: center;
justify-content: center;
`;

const Column = styled.View`
`;

export default ProductScreen;
