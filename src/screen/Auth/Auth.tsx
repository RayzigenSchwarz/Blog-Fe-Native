import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Formik, FormikProps} from 'formik';
import {useNavigation} from '@react-navigation/native';
// local
import {
  ELoginType,
  FormValues,
  LoginInFormProps,
} from '../../common/types/auth.types';
import Input from '../../components/TextInput/TextInput';
import {COLORS} from '../../common/const/colors.const';
import CustomButton from '../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {IDataType} from '../../store/auth/types';
import {
  fetchLoginRequest,
  fetchRegisterRequest,
} from '../../store/auth/actions';
import {
  buttonTitle,
  initialValues,
  linkTitle,
  validationSchema,
} from '../../common/helper/auth';
import {LOGIN, REGISTER} from '../../common/const/navigation.const';
import {RootStackParamList} from '../../common/types/navigation.types';

const Auth = ({type}: LoginInFormProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoginIn = type === ELoginType.LOGIN;

  const navigationFunc = (to: keyof RootStackParamList): void => {
    return navigation.navigate(to);
  };

  const onSubmit = (values: FormValues) => {
    const data: IDataType = {
      username: values.username?.toLowerCase(),
      password: values.password,
    };
    dispatch(isLoginIn ? fetchLoginRequest(data) : fetchRegisterRequest(data));
  };

  return (
    <View style={style.mainContainer}>
      {console.log(type, 'type')}
      <Text style={style.titleStyle}>
        {isLoginIn ? 'Войти' : 'Регистрация'}
      </Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          errors,
          values,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          isValid,
          dirty, // TODO disabled TouchableOpacity
        }: FormikProps<FormValues>) => {
          const {
            username: userNameError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
          } = errors;

          const {
            username: userNameTouched,
            password: passwordTouched,
            confirmPassword: confirmPasswordTouched,
          } = touched;

          const {
            username: userNameValues,
            password: passwordValues,
            confirmPassword: confirmPasswordValues,
          } = values;

          const errorUserName = userNameTouched && userNameError;

          const errorPassword = passwordTouched && passwordError;

          const errorConfirmPassword =
            confirmPasswordTouched && confirmPasswordError;
          return (
            <>
              <Input
                placeholder={'Логин'}
                placeholderTextColor={COLORS.BORDER_GRAY}
                style={[
                  style.inputStyle,
                  errorUserName ? style.inputError : undefined,
                ]}
                value={userNameValues}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />

              {errorUserName && (
                <Text style={style.alertErrorShow}>{userNameError}</Text>
              )}

              <Input
                placeholder={'Пароль'}
                placeholderTextColor={COLORS.BORDER_GRAY}
                style={[
                  style.inputStyle,
                  errorPassword ? style.inputError : undefined,
                ]}
                value={passwordValues}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={true}
              />

              {errorPassword && (
                <Text style={style.alertErrorShow}>{passwordError}</Text>
              )}
              {!isLoginIn && (
                <Input
                  placeholder={'Повторите пароль'}
                  placeholderTextColor={COLORS.BORDER_GRAY}
                  style={[
                    style.inputStyle,
                    errorConfirmPassword ? style.inputError : undefined,
                  ]}
                  value={confirmPasswordValues}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  secureTextEntry={true}
                />
              )}
              {!isLoginIn && errorConfirmPassword && (
                <Text style={style.alertErrorShow}>{confirmPasswordError}</Text>
              )}

              <CustomButton
                style={style.buttonStyle}
                onPress={handleSubmit}
                buttonText={buttonTitle(type)}
                buttonTextStyle={style.buttonText}
              />
              <TouchableOpacity
                onPress={() =>
                  isLoginIn ? navigationFunc(REGISTER) : navigationFunc(LOGIN)
                }>
                <Text style={style.navigateLinkStyle}>{linkTitle(type)}</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export const style = StyleSheet.create({
  mainContainer: {
    width: '86%',
    justifyContent: 'center',
    height: '90%',
    alignSelf: 'center',
  },
  titleContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  titleStyle: {
    marginBottom: 24,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.FONT_BLACK,
  },
  backLinkStyle: {
    color: COLORS.BLUE,
    fontSize: 16,
  },
  inputStyle: {
    width: '100%',
    height: 40,
    borderStyle: 'solid',
    padding: 12,
    borderWidth: 2,
    borderColor: COLORS.BORDER_GRAY,
    borderRadius: 6,
    marginBottom: 8,
  },
  inputError: {
    borderColor: COLORS.ERROR,
  },
  alertErrorShow: {
    color: COLORS.ERROR,
    marginBottom: 8,
  },
  buttonStyle: {
    marginTop: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: COLORS.BLUE,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  navigateLinkStyle: {
    color: COLORS.BLUE,
    marginTop: 12,
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default Auth;
