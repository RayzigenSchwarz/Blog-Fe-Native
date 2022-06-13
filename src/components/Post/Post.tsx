import React, {useCallback, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// local
import LikeIcon from '../../assets/icon/LikeIcon';
import FillLikeIcon from '../../assets/icon/FillLikeIcon';
import {IPostProps} from '../../common/types/post.types';
import {style} from './style';
import {dateFormat} from '../../common/helper/dateHelper';

const Post = ({
  postImg,
  title,
  description,
  like,
  postAuthor,
  userAvatar,
  createdAt,
}: IPostProps) => {
  const [likePress, setLikePress] = useState(false);

  const likePressHandler = () => {
    setLikePress(!likePress);
  };

  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);

  return (
    <View style={style.postContainer}>
      <View style={style.postAuthorContainer}>
        <Image
          source={{
            uri: userAvatar,
          }}
          style={style.postAuthorUserAvatar}
        />
        <Text style={style.postAuthorUserName}>{postAuthor}</Text>
      </View>

      <Text style={style.postDate}>{dateFormat(createdAt)}</Text>

      <Image
        style={style.postPhoto}
        source={{
          uri: postImg,
        }}
      />

      <Text style={style.postTitle}>{title}</Text>

      <View>
        <Text
          style={style.postDescription}
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 3}>
          {description}
        </Text>

        {lengthMore && (
          <Text
            onPress={toggleNumberOfLines}
            style={style.postHideShowDescription}>
            {textShown ? 'Скрыть текст' : 'Показать больше'}
          </Text>
        )}
      </View>

      <View style={style.likeContainer}>
        <TouchableOpacity onPress={likePressHandler} style={style.like}>
          {!likePress ? <LikeIcon /> : <FillLikeIcon />}
        </TouchableOpacity>

        <Text style={style.likeCount}>{like}</Text>
      </View>
    </View>
  );
};

export default Post;
