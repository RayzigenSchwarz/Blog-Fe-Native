import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/const/colors.const';

export const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.BLUE,
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingHorizontal: 8,
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerLogo: {
    fontSize: 36,
    color: COLORS.WHITE,
    fontWeight: '600',
  },
});
