import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeContainer from './app/Home/containers/HomeContainer';
import ScanContainer from './app/Scan/Containers/ScanContainer';
import ProductContainer from './app/Product/containers/ProductContainer';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Product: {
      screen: ProductContainer,
    },
    Scan: {
      screen: ScanContainer,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
