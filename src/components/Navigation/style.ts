import {StyleSheet} from 'react-native';
// local
import {COLORS} from '../../common/const/colors.const';

export const style = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    paddingHorizontal: 14,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    paddingTop: 12,
    paddingBottom: 24,
    bottom: 0,
  },
  navIconStyle: {
    alignSelf: 'flex-end',
    width: 24,
    height: 24,
  },
});
