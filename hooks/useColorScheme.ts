import { useColorScheme as _useColorScheme } from 'react-native';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import merge from 'deepmerge';


export default function useColorScheme() {
  const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
  const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
  const colorScheme = _useColorScheme();

  const darkTheme = {
    ...CombinedDarkTheme,
    colors: {
      ...CombinedDarkTheme.colors,
    },
  };

  const lightTheme = {
    ...CombinedDefaultTheme,
    colors: {
      ...CombinedDefaultTheme.colors,
    },
  };

  return colorScheme == 'dark' ? darkTheme : lightTheme;
}
