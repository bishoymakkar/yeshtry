//   estimateTimeTo: PropTypes.string,
//   addressDescription: PropTypes.string.isRequired,
//   totalAmount: PropTypes.number.isRequired,
//   excludeDelivery: PropTypes.bool,

import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

import ProductScreen from '../components/ProductScreen';

const ProductContainer = inject('ordersStore', 'userStore')(
  observer(({navigation}) => (
    <ProductScreen
      navigation={navigation}
      product={navigation.getParam('product')}
      pointsPopup={navigation.getParam('pointsPopup')}
    />
  )),
);

ProductContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ProductContainer;
