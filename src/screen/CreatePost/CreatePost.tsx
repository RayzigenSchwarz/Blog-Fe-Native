import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {
  initialValuesPost,
  validationsShima,
} from '../../common/const/post.const';
import {PostsTypes} from '../../common/types/post.types';
import {style} from './style';
import {COLORS} from '../../common/const/colors.const';
import {fetchPostsRequest} from '../../store/post/action';
import {useDispatch} from 'react-redux';
import {setStorage} from '../../common/services/storage.service';

const CreatePost = () => {
  const dispatch = useDispatch();

  setStorage(
    'token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGM2YjljZmYwOGJmMDAwNGFmOWZmNCIsInVzZXIiOiJzbWFsbGRpY2sxMjMiLCJpYXQiOjE2NTMzNjk3NTZ9.6mAu9BZTY5aY1g8OMSRxO47kEj5eVLUndTwzZ0UVDGQ',
  );

  const onSubmit = (values: PostsTypes) => {
    dispatch(fetchPostsRequest(values));
    console.log(values);
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
              <Text style={style.postTitle}>Создание поста</Text>

              <View style={style.inputContainer}>
                <TextInput
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

                <TextInput
                  placeholder={'Ссылка на фото'}
                  placeholderTextColor={COLORS.LIGHT_GRAY}
                  style={style.inputStyle}
                  onChangeText={handleChange('image')}
                  onBlur={handleBlur('image')}
                  value={valuesImage}
                />

                <TextInput
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

                <TouchableOpacity
                  style={style.buttonStyle}
                  // underlayColor={COLORS.RED}
                  onPress={handleSubmit}>
                  <Text style={style.buttonText}>Опубликовать</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default CreatePost;
