import {ELoginType} from '../types/auth.types';
import {
  initialValuesLoginIn,
  initialValuesRegister,
  validationSchemaLogin,
  validationSchemaRegister,
} from '../const/loginForm';
import {LOGIN, REGISTER} from '../const/navigation.const';

export const initialValues = (type: string) => {
  return type === ELoginType.LOGIN
    ? initialValuesLoginIn
    : initialValuesRegister;
};

export const validationSchema = (type: string) => {
  return type === ELoginType.LOGIN
    ? validationSchemaLogin
    : validationSchemaRegister;
};

export const buttonTitle = (type: string) => {
  return type === ELoginType.LOGIN ? 'Войти' : 'Зарегистрироваться';
};

export const linkTitle = (type: string) => {
  return type === ELoginType.LOGIN ? 'Создать аккаунт' : 'Войти в аккаунт';
};

export const loginPath = (type: string) => {
  return type === ELoginType.LOGIN ? REGISTER : LOGIN;
};

export const getAuthTitle = (
  loginType: string,
  loginTypeMap: Map<string, string>,
) => {
  return loginTypeMap.get(loginType);
};
