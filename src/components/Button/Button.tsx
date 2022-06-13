import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

export interface IButtonProps {
  style: object;
  onPress: (event: GestureResponderEvent) => void;
  buttonText: string;
  buttonTextStyle: object;
}

const CustomButton: React.FC<IButtonProps> = ({
  style,
  onPress,
  buttonText,
  buttonTextStyle,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
