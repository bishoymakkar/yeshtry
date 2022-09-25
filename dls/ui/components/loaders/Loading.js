import React from 'react';
import {View, ActivityIndicator} from "react-native";

import colors from '../../styleguide/colors';
import {moderateScale} from '../../../helper/scaleHelper';

export default class Loading extends React.Component {

  render() {
    return (<View style={{flex: 1, backgroundColor: colors.white}}>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          style={{marginVertical: moderateScale(14)}}
          animating
          size={moderateScale(50)}
          color={colors.violet}
        />
      </View>
    </View>
    );
  }
}