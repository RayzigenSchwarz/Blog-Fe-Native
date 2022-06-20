export type FormValues = {
  username?: string;
  password?: string;
  confirmPassword?: string;
  password_new?: string;
  password_old?: string;
};

export interface LoginInFormProps {
  type: string;
}

export enum ELoginType {
  LOGIN = 'login',
  REGISTER = 'register',
  CHANGE_PASSWORD = 'changePassword',
}
