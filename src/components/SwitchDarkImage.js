import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

function SwitchDarkImage({className, defaultSrc, darkSrc}) {
  const {isDarkTheme} = useThemeContext();
  return (
    <img
      className={className}
      src={isDarkTheme ? darkSrc : defaultSrc}
    />
  );
}

export default SwitchDarkImage
