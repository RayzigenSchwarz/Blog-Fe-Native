import {StackNavigationProp} from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Search: undefined;
      CreatePost: undefined;
      Profile: undefined;
      Register: undefined;
      Login: undefined;
    }
  }
}

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  CreatePost: undefined;
  Profile: undefined;
  Register: undefined;
  Login: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type homeScreenProp = StackNavigationProp<RootStackParamList>;
