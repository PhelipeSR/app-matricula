import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import Routes from './navigation';
import { AuthProvider } from './contexts/auth';
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = useColorScheme();

  if (!isLoadingComplete) {return null}

  return (
    <AuthProvider>
        <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <Routes />
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
