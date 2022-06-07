import React from 'react';
import {SafeAreaView} from 'react-native';
// local
import Layout from './src/components/Layout/Layout';
import AllPost from './src/components/Post/AllPost';

const App = () => {
  return (
    <SafeAreaView>
      <Layout children={<AllPost />} />
    </SafeAreaView>
  );
};

export default App;
