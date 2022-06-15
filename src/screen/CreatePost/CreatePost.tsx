import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
// local
import {
  initialValuesPost,
  validationsShima,
} from '../../common/const/post.const';
import {PostsTypes} from '../../common/types/post.types';
import {style} from './style';
import {COLORS} from '../../common/const/colors.const';
import {useDispatch} from 'react-redux';
import {setStorage} from '../../common/services/storage.service';
import Input from '../../components/TextInput/TextInput';
import CustomButton from '../../components/Button/Button';
import {fetchPostsRequest} from '../../store/post/action';

const CreatePost = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  setStorage(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGM2YjljZmYwOGJmMDAwNGFmOWZmNCIsInVzZXIiOiJzbWFsbGRpY2sxMjMiLCJpYXQiOjE2NTMzNjk3NTZ9.6mAu9BZTY5aY1g8OMSRxO47kEj5eVLUndTwzZ0UVDGQ',
  );

  const onSubmit = (values: PostsTypes) => {
    dispatch(fetchPostsRequest(values));
  };

  return (
    <View style={style.addPostContainer}>
      <Formik
        initialValues={initialValuesPost}
        validationSchema={validationsShima}
        onSubmit={onSubmit}>
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          values,
        }) => {
          const {title: touchedTitle, description: touchedDescription} =
            touched;

          const {title: errorsTitle, description: errorsDescription} = errors;

          const {
            title: valuesTitle,
            description: valuesDescription,
            image: valuesImage,
          } = values;

          const titleError = touchedTitle && errorsTitle;

          const descriptionError = touchedDescription && errorsDescription;
          return (
            <View style={style.formContainer}>
              <View style={style.postTitleContainer}>
                <Text style={style.postTitle}>Создание поста</Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={style.backLink}>Назад</Text>
                </TouchableOpacity>
              </View>

              <View style={style.inputContainer}>
                <Input
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  placeholder={'Заголовок статьи'}
                  style={[
                    style.inputStyle,
                    titleError ? style.inputError : undefined,
                  ]}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={valuesTitle}
                />

                {titleError && (
                  <Text style={style.alertErrorShow}>{titleError}</Text>
                )}

                <Input
                  placeholder={'Ссылка на фото'}
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  onChangeText={handleChange('image')}
                  style={style.inputStyle}
                  onBlur={handleBlur('image')}
                  value={valuesImage}
                />

                <Input
                  placeholder={'Описание статьи'}
                  style={[
                    style.inputStyle,
                    style.textAreaStyle,
                    descriptionError ? style.inputError : undefined,
                  ]}
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={valuesDescription}
                />

                {descriptionError && (
                  <Text style={style.alertErrorShow}>{descriptionError}</Text>
                )}

                <CustomButton
                  style={style.buttonStyle}
                  onPress={handleSubmit}
                  buttonText={'Опубликовать'}
                  buttonTextStyle={style.buttonText}
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default CreatePost;
