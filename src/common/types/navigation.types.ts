import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  CreatePost: undefined;
  Profile: undefined;
};

export type homeScreenProp = StackNavigationProp<RootStackParamList>;
