import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';

type Props = React.ComponentProps<typeof StatusBar>;
export const FocusAwareStatusBar = (props: Props) => {
  const isFocused = useIsFocused();
  const isDark = false;
  const barStyle = isDark ? 'light-content' : 'dark-content';

  return isFocused ? <StatusBar barStyle={barStyle} {...props} /> : null;
};
