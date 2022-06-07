import {StyleSheet} from 'react-native';
import {COLORS} from '../../common/const/colors.const';

export const style = StyleSheet.create({
  navContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    bottom: 0,
    marginTop: 12,
    flex: 1,
  },
});
