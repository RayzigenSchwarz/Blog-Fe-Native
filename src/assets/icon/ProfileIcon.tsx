import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = () => {
  return (
    <Svg width={34} height={34} fill="none">
      <Path
        d="M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.343 16.343A8 8 0 0 0 4 22h2a6 6 0 1 1 12 0h2a8 8 0 0 0-13.657-5.657Z"
        fill="#2B7ACD"
      />
    </Svg>
  );
};

export default ProfileIcon;
