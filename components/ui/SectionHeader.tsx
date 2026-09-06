import React from 'react';
import { Text, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <View className="mb-5">
      <View className="flex-row items-center mb-1">
        <View className="w-1 h-6 bg-primary rounded-sm mr-2.5" />
        <Text className="text-foreground text-[22px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
          {title}
        </Text>
      </View>
      {subtitle ? (
        <Text className="text-muted text-[13px] ml-3.5" style={{ fontFamily: 'PTSans_400Regular' }}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}
