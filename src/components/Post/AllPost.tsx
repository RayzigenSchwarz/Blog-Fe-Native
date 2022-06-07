import React from 'react';
import Post from './Post';
import {FlatList, StyleSheet, View} from 'react-native';
import {posts} from '../../common/const/post.const';
import {style} from './style';

const AllPost = () => {
  return (
    <FlatList
      data={posts}
      contentContainerStyle={style.allPostContainer}
      renderItem={({item}) => (
        <View style={{alignItems: 'center'}}>
          <Post
            postImg={item.postImg}
            title={item.title}
            description={item.description}
            like={item.like}
            date={item.date}
            postAuthor={item.author}
            userAvatar={item.userAvatar}
          />
        </View>
      )}
      keyExtractor={(item: {id: string}) => item.id}
    />
  );
};

export default AllPost;
