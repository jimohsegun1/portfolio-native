import '../global.css';

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  SpaceGrotesk_700Bold,
  SpaceGrotesk_400Regular,
} from '@expo-google-fonts/space-grotesk';
import {
  PTSans_400Regular,
  PTSans_700Bold,
} from '@expo-google-fonts/pt-sans';
import { useColorScheme } from 'nativewind';

SplashScreen.preventAutoHideAsync();

function RootContent() {
  const { colorScheme } = useColorScheme();
  return (
    <View className={colorScheme === 'dark' ? 'dark flex-1' : 'flex-1'}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_700Bold,
    SpaceGrotesk_400Regular,
    PTSans_400Regular,
    PTSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    // GestureHandlerRootView is a native component — keep style prop
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <RootContent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
