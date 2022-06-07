import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

const Header = () => {
  return (
    <View style={[style.headerContainer]}>
      <Text style={style.headerLogo}> Logo </Text>
    </View>
  );
};

export default Header;
