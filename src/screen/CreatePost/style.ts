import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/const/colors.const';

export const style = StyleSheet.create({
  addPostContainer: {justifyContent: 'center', height: '90%'},
  textAreaStyle: {height: '35%'},
  alertErrorHide: {
    height: 0,
  },
  alertErrorShow: {
    color: COLORS.ERROR,
    marginBottom: 8,
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
  postTitle: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: '500',
    color: COLORS.FONT_BLACK,
  },
  inputContainer: {
    width: '86%',
  },
  formContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  postTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
  },
  backLink: {
    color: COLORS.BLUE,
    fontSize: 16,
  },
  buttonStyle: {
    marginTop: 12,
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
});
