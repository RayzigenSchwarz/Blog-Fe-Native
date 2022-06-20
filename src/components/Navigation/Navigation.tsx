import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// local
import HomeScreenIcon from '../../assets/icon/HomeScreenIcon';
import SearchIcon from '../../assets/icon/SearchIcon';
import AddPostIcon from '../../assets/icon/AddPostIcon';
import ProfileIcon from '../../assets/icon/ProfileIcon';
import {style} from './style';
import DutyIcon from '../../assets/icon/DutyIcon';
import {
  CREATE_POST,
  HOME_SCREEN,
  LOGIN,
  REGISTER,
  SEARCH,
} from '../../common/const/navigation.const';
import {
  homeScreenProp,
  RootStackParamList,
} from '../../common/types/navigation.types';

const Navigation = () => {
  const navigation = useNavigation<homeScreenProp>();

  const navigationFunc = (to: keyof RootStackParamList): void => {
    return navigation.navigate(to);
  };

  return (
    <View style={style.navContainer}>
      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigationFunc(HOME_SCREEN)}>
        <HomeScreenIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigationFunc(SEARCH)}>
        <SearchIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigationFunc(CREATE_POST)}>
        <AddPostIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <DutyIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigationFunc(LOGIN)}>
        <ProfileIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
