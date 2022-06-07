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
      <TouchableOpacity>
        <HomeScreenIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <SearchIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <AddPostIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <DutyIcon />
      </TouchableOpacity>

      <TouchableOpacity>
        <ProfileIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
