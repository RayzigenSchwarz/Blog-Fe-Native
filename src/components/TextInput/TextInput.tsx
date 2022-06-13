import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';

export interface ITextInputProps {
  placeholder: string;
  placeholderTextColor: string;
  onChangeText: (text: string) => void;
  value?: string;
  style?: object;
  placeholderColor?: string;
  name?: string | number;
  multiline?: boolean;
  numberOfLines?: number;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const Input: React.FC<ITextInputProps> = ({
  placeholderTextColor,
  placeholder,
  onChangeText,
  value,
  style,
  multiline = false,
  numberOfLines,
  onBlur,
}) => {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      placeholder={placeholder}
      style={style}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
};

export default Input;
