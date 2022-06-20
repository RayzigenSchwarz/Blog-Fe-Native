import * as Yup from 'yup';

export const initialValuesLoginIn = {
  username: '',
  password: '',
};

export const validationSchemaLogin = Yup.object({
  username: Yup.string()
    .min(5, 'Минимальная длинна 5 символов')
    .required('Обязательное поле')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!'),
  password: Yup.string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
});

export const initialValuesRegister = {
  username: '',
  password: '',
  confirmPassword: '',
};

export const validationSchemaRegister = Yup.object({
  username: Yup.string()
    .min(5, 'Минимальная длинна 5 символов')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Пароли не совпадают')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
});

export const initialValuesChangePassword = {
  password_old: '',
  password_new: '',
  confirmPassword: '',
};

export const validationSchemaChangePassword = Yup.object({
  password_old: Yup.string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
  password_new: Yup.string()
    .min(8, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password_new'), ''], 'Пароли не совпадают')
    .matches(/^[A-Za-z0-9]+$/, 'Только латинские символы, чорт!')
    .required('Обязательное поле'),
});
