import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';

const BurgerMenu = () => {
  return (
    <View style={style.burgerContainer}>
      <TouchableOpacity>
        <Text style={style.burgerNavItem}>Главная</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={style.burgerNavItem}>Профиль</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={style.burgerNavItem}>Смена пароля</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={style.burgerNavItem}>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BurgerMenu;
