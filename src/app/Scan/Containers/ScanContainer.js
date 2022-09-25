import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

import ScanScreen from '../Components/ScanScreen';

const ScanContainer = inject('productsStore')(
	observer((props) => (
		<ScanScreen
			navigation={props.navigation}
			product={props.navigation.getParam('product')}
		/>
	)),
);

ScanContainer.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default ScanContainer;
