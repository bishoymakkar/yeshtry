import React, {Component} from 'react';
import {View, } from 'react-native';
import {Provider} from 'mobx-react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SplashScreen from 'react-native-splash-screen';

import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';

import AppNavigator from './src/AppNavigator';
import RootStore from './src/state/stores/RootStore';
import NavigationService from './src/NavigationService';

const rootStore = new RootStore();

class App extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  componentWillUnmount() {
    rootStore.productsStore.clearStore();
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Provider
            rootStore={rootStore}
            userStore={rootStore.userStore}
            searchStore={rootStore.searchStore}
            ordersStore={rootStore.ordersStore}
            productsStore={rootStore.productsStore}
            orderMiddleStore={rootStore.orderMiddleStore}
            bulkOrderMiddleStore={rootStore.bulkOrderMiddleStore}>
            <View style={{flex: 1}}>
              <AppNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </View>
          </Provider>
        </ApplicationProvider>
      </>
    );
  }
}

export default App;
