import React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddPostIcon = () => {
  return (
    <Svg width={34} height={34} fill="none">
      <Path
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm8 12h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"
        fill="#2B7ACD"
      />
    </Svg>
  );
};

export default AddPostIcon;
