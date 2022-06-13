export type ProfileFormValues = {
  userWallpaper?: string;
  userName?: string;
  userAvatar?: string;
  userAge?: number;
  aboutUser?: string;
  userPosition?: string;
};

export interface ISelectOptions {
  id: string;
  value: string | undefined;
  selectValue: string;
  disabled: boolean;
  hidden: boolean;
}
