import React from 'react';
import Svg, {Path} from 'react-native-svg';
// local
import {IconTypes} from '../../common/types/icon.types';

const AddPostIcon = ({width, height}: IconTypes) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm8 12h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"
        fill="#2B7ACD"
      />
    </Svg>
  );
};

export default AddPostIcon;
