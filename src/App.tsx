import React from 'react';
import {SafeAreaView} from 'react-native';
// local
import Layout from './components/Layout/Layout';
import {Provider} from 'react-redux';
import store from './store';
import CreatePost from './screen/CreatePost/CreatePost';
import AllPost from './screen/AllPosts/AllPost';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Layout children={<AllPost />} />
        {/*<Layout children={<CreatePost />} />*/}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
