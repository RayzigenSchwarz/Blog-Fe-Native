import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// local
import Layout from '../components/Layout/Layout';
import AllPost from '../screen/AllPosts/AllPost';
import CreatePost from '../screen/CreatePost/CreatePost';
import {CREATE_POST, HOME_SCREEN} from '../common/const/navigation.const';

const Stack = createStackNavigator();

export const RootStack = () => {
  const renderStack = () => {
    return (
      <>
        <Stack.Screen name={HOME_SCREEN}>
          {() => <Layout children={<AllPost />} />}
        </Stack.Screen>
        <Stack.Screen name={CREATE_POST}>
          {() => <Layout children={<CreatePost />} />}
        </Stack.Screen>
      </>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {renderStack()}
    </Stack.Navigator>
  );
};
