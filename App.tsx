import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Routes from './navigation';
import { AuthProvider } from './contexts/auth';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {return null}

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Routes />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
