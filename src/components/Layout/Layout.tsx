import React from 'react';
// local
import Header from '../header/Header';
import Navigation from '../Navigation/Navigation';
import {ChildrenType} from '../../common/types/children.types';
import {View} from 'react-native';
import {style} from './style';

const Layout = ({children}: ChildrenType) => {
  return (
    <View style={style.layoutContainer}>
      <Header />
      {children}
      <Navigation />
    </View>
  );
};

export default Layout;
