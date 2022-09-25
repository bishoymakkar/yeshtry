import React from 'react';
import PropTypes from 'prop-types';

import HomeScreen from '../components/HomeScreen';

const HomeContainer = (props) => <HomeScreen
  navigation={props.navigation}
/>;

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeContainer;
