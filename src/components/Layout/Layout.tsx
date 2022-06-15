import React from 'react';
import {SafeAreaView} from 'react-native';
// local
import Header from '../header/Header';
import Navigation from '../Navigation/Navigation';
import {ChildrenType} from '../../common/types/children.types';
import {style} from './style';

const Layout = ({children}: ChildrenType) => {
  return (
    <SafeAreaView style={style.layoutContainer}>
      <Header />
      {children}
      <Navigation />
    </SafeAreaView>
  );
};

export default Layout;
