import React, {useEffect} from 'react';
import Post from '../../components/Post/Post';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// local
import {fetchGetPostsRequest} from '../../store/post/action';
import {getPosts} from '../../store/post/selectors';
import {postType} from '../../store/post/types';
import {fetchGetUserinfoRequest} from '../../store/profile/actions';
import {style} from './style';

const AllPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts) as postType[];
  // const loading = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchGetUserinfoRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGetPostsRequest());
  }, [dispatch]);
  return (
    <>
      {/*{loading && (*/}
      <FlatList
        data={posts}
        contentContainerStyle={style.allPostContainer}
        renderItem={({item}) => {
          return (
            <View style={style.postAlignItem}>
              <Post
                id={item._id}
                postImg={item.image[0]}
                title={item.title}
                description={item.description}
                like={'123'}
                createdAt={item.createdAt}
                postAuthor={'Вася Пупкин'}
                userAvatar={
                  'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                }
              />
            </View>
          );
        }}
        keyExtractor={(post: postType) => post._id}
      />
      {/*)}*/}
    </>
  );
};

export default AllPost;
