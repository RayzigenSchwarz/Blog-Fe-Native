import React from 'react';
import {TouchableOpacity, View} from 'react-native';
// local
import HomeScreenIcon from '../../assets/icon/HomeScreenIcon';
import SearchIcon from '../../assets/icon/SearchIcon';
import AddPostIcon from '../../assets/icon/AddPostIcon';
import ProfileIcon from '../../assets/icon/ProfileIcon';
import {style} from './style';
import DutyIcon from '../../assets/icon/DutyIcon';

const Navigation = () => {
  return (
    <View style={style.navContainer}>
      <TouchableOpacity style={style.navIconStyle}>
        <HomeScreenIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <SearchIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <AddPostIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <DutyIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity style={style.navIconStyle}>
        <ProfileIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
