import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import { navLinks, personalData } from '../../lib/data';

interface NavigationDrawerProps {
  onNavPress: (label: string) => void;
}

export function NavigationDrawer({ onNavPress }: NavigationDrawerProps) {
  const { colorScheme } = useColorScheme();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
      />
    ),
    []
  );

  const handleNavPress = (label: string) => {
    sheetRef.current?.close();
    setTimeout(() => onNavPress(label), 300);
  };

  return (
    <>
      {/* Header Bar */}
      <View className="flex-row items-center justify-between px-5 py-4 border-b border-card-border bg-card">
        <Text className="text-foreground text-lg font-bold" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
          Jeremiah
        </Text>

        <View className="flex-row items-center gap-3">
          {/* GitHub */}
          <TouchableOpacity
            onPress={() => Linking.openURL(personalData.contact.github)}
            className="w-9 h-9 rounded-full border border-card-border items-center justify-center"
          >
            <Text className="text-foreground text-xs font-bold">GH</Text>
          </TouchableOpacity>

          {/* Menu Button */}
          <TouchableOpacity
            onPress={() => sheetRef.current?.expand()}
            className="w-9 h-9 rounded-full border border-card-border items-center justify-center"
            accessibilityLabel="Open navigation menu"
          >
            <View className="gap-1 items-center">
              <View className="w-5 h-0.5 bg-foreground rounded-full" />
              <View className="w-5 h-0.5 bg-foreground rounded-full" />
              <View className="w-5 h-0.5 bg-foreground rounded-full" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet Drawer */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: colorScheme === 'dark' ? '#111113' : '#f8f8f8' }}
        handleIndicatorStyle={{ backgroundColor: colorScheme === 'dark' ? '#3f3f46' : '#e4e4e7', width: 40 }}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <View className="px-5 py-2">
            <Text
              className="text-muted-foreground text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: 'PTSans_400Regular' }}
            >
              Navigation
            </Text>
            {navLinks.map((link) => (
              <TouchableOpacity
                key={link.href}
                onPress={() => handleNavPress(link.label)}
                className="py-4 border-b border-card-border/50"
              >
                <Text
                  className="text-foreground text-lg font-medium"
                  style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                >
                  {link.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}
