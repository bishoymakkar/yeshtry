import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components/native';
import {BackHandler} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import fonts from '../../../../dls/ui/styleguide/fonts';
import colors from '../../../../dls/ui/styleguide/colors';
import {isArabic} from '../../../../dls/config/appConfig';
import strings from '../../../../dls/localization/localize';
import {Loading} from '../../../../dls/ui/components/loaders';
import bagIcon from "../../../../dls/ui/icons/bagWhite/bag.png";
import fontsAr from '../../../../dls/ui/styleguide/fontsArabic';
import blueQr from "../../../../dls/ui/icons/blueQr/blueQr.png";
import {moderateScale} from '../../../../dls/helper/scaleHelper';
import boxBlue108 from "../../../../dls/ui/icons/boxBlue108/boxBlue108.png";
import {ImageComponent} from '../../../../dls/ui/components/imageComponents';
import recieptBlue from "../../../../dls/ui/icons/recieptBlue/receiptBlue.png";
import CircularButton from '../../../../dls/ui/components/buttons/CircularButton';
import headerIcon from "../../../../dls/ui/icons/headerElement/headerElement.png";
import {OrderTrackingHeader} from '../../../../dls/ui/components/navigationHeaders';
import IconComponent from '../../../../dls/ui/components/imageComponents/IconComponent';

@inject('productsStore')
@observer
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
    this.props.productsStore.loadProducts(() => {
      this.setState({
        isLoading: false
      });
    })
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleHardwareBackButton,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleHardwareBackButton,
    );
  }

  handleHardwareBackButton = () => {
    BackHandler.exitApp();
  };

  onPressProduct = (product) => {
    this.props.navigation.navigate('Product', {
      product
    })
  };

  handleRefresh = () => {
    this.props.productsStore.loadProducts(() => {
      this.setState({
        isLoading: false
      });
    });
  };

  render() {
    const {isLoading, refreshing} = this.state;
    const {products} = this.props.productsStore;

    if (isLoading) return <Loading />;
    return (
      <>
        <Container>
          <OrderTrackingHeader
            headerTitle={strings.scanProducts}
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
            onPressBack={() => {}}
          />
          <MiddleCardContainer>
            <InnerBody
              data={products.slice()}
              contentContainerStyle={{flexGrow: 1}}
              ListEmptyComponent={
                <Card>
                  <IconComponent source={boxBlue108} />
                  <Text
                    style={{textAlign: 'center'}}
                    color={colors.waterBlue}
                    fontStyle={
                      isArabic ? fontsAr.large1B : fonts.large1B
                    }>
                    {strings.noProducts}
                  </Text>
                </Card>
              }
              onRefresh={this.handleRefresh}
              refreshing={refreshing}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) =>
                <ProductCard
                  onPress={() => this.onPressProduct(item)}
                  key={item.id}>
                  <Row>
                    <ImageComponent
                      uri={item.image_url}
                      style={{
                        width: moderateScale(110),
                        height: moderateScale(110)
                      }}
                    />
                    <Column
                      style={{
                        alignItems: 'center',
                        paddingHorizontal: moderateScale(14),
                      }}>
                      <Row style={{paddingVertical: moderateScale(14)}}>
                        <Text
                          numberOfLines={1}
                          fontStyle={
                            isArabic ? fontsAr.medium2R : fonts.medium2R
                          }
                          color={colors.darkBlueGrey}>
                          {item.name}
                        </Text>
                      </Row>
                      <Row>
                        <Row>
                          <IconComponent style={{
                            width: moderateScale(30),
                            height: moderateScale(30)
                          }} source={blueQr} />
                          <Text
                            numberOfLines={1}
                            fontStyle={
                              isArabic ? fontsAr.regularR : fonts.regularR
                            }
                            color={colors.blue}>
                            {"100"}
                          </Text>
                        </Row>
                        <Row style={{width: moderateScale(50)}} />
                        <Row>
                          <IconComponent style={{
                            width: moderateScale(17),
                            height: moderateScale(27)
                          }} source={recieptBlue} />
                          <Text
                            numberOfLines={1}
                            fontStyle={
                              isArabic ? fontsAr.regularR : fonts.regularR
                            }
                            color={colors.blue}>
                            {"200"}
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </ProductCard>
              }
            />
          </MiddleCardContainer>
        </Container >
      </>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const MiddleCardContainer = styled.View`
background-color: ${colors.white};
margin-top: -15;
border-radius: ${moderateScale(27)};
padding: ${moderateScale(14)}px;
box-shadow: 0px -4px 17px rgba(255, 255, 255, 0.25);
`;

const InnerBody = styled.FlatList``;

const View = styled.View`
`;

const Card = styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
  margin-top: ${moderateScale(14)};
`;

const ProductCard = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-bottom-width: 1;
  border-bottom-color: ${colors.veryLightPink};
  padding: ${moderateScale(14)}px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Column = styled.View`
  flex: 1;
  padding: 0;
`;

const Text = styled.Text`
  ${props => props.fontStyle};
  font-size: ${props => moderateScale(props.fontStyle.fontSize)};
  color: ${props => props.color};
`;

export default HomeScreen;
