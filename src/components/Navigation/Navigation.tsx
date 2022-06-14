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
  PROFILE,
  SEARCH,
} from '../../common/const/navigation.const';
import {homeScreenProp} from '../../common/types/navigation.types';

const Navigation = () => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={style.navContainer}>
      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigation.navigate(HOME_SCREEN)}>
        <HomeScreenIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigation.navigate(SEARCH)}>
        <SearchIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigation.navigate(CREATE_POST)}>
        <AddPostIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <DutyIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.navIconStyle}
        onPress={() => navigation.navigate(PROFILE)}>
        <ProfileIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
