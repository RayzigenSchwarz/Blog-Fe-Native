import * as Yup from 'yup';
import {PostsTypes} from '../types/post.types';

export const validationsShima = Yup.object({
  title: Yup.string().required('Обязательное поле'),
  description: Yup.string().required('Обязательное поле'),
});

export const initialValuesPost: PostsTypes = {
  title: '',
  description: '',
  image: '',
};

export enum EPostType {
  CREATE_POST = 'createPost',
  EDIT_POST = 'editePost',
}
