import {StyleSheet} from 'react-native';
// local
import {COLORS} from '../../common/const/colors.const';

export const style = StyleSheet.create({
  postAuthorContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  postAuthorUserAvatar: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: 8,
  },
  postAuthorUserName: {
    fontSize: 18,
    fontWeight: '300',
    color: COLORS.BLACK,
  },
  postDate: {
    marginBottom: 12,
    color: COLORS.GRAY,
  },
  postContainer: {
    width: '96%',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 6,
    borderColor: COLORS.BORDER_GRAY,
    borderWidth: 2,
    marginBottom: 12,
  },
  postPhoto: {
    borderRadius: 4,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  postTitle: {
    width: '100%',
    fontSize: 28,
    color: COLORS.BLACK,
    marginBottom: 8,
  },
  postDescription: {
    width: '100%',
    fontSize: 18,
    marginBottom: 2,
    fontWeight: '300',
    color: COLORS.BLACK,
  },
  likeContainer: {
    width: '18%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  like: {},
  likeCount: {
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.BLACK,
    fontWeight: '300',
  },
  postHideShowDescription: {
    width: '100%',
    fontSize: 18,
    fontWeight: '300',
    color: COLORS.BLUE,
  },
});
