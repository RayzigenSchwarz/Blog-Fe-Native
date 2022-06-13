import React from 'react';
import Svg, {Path} from 'react-native-svg';
// local
import {IconTypes} from '../../common/types/icon.types';

const HomeScreenIcon = ({width, height}: IconTypes) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M19 22H5a1 1 0 0 1-1-1v-9.586a1 1 0 0 1 .293-.707l7-7a1 1 0 0 1 1.415 0l7 7a.994.994 0 0 1 .292.707V21a1 1 0 0 1-1 1Zm-9-7h4v5h4v-8.172l-6-6-6 6V20h4v-5Z"
        fill="#2B7ACD"
      />
    </Svg>
  );
};

export default HomeScreenIcon;
