import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'outline';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  if (variant === 'outline') {
    return (
      <View className="rounded-full border border-primary px-2 py-0.5">
        <Text className="text-primary text-xs font-medium">{label}</Text>
      </View>
    );
  }
  return (
    <View className="rounded-full bg-primary/20 px-2 py-0.5">
      <Text className="text-primary text-xs font-medium">{label}</Text>
    </View>
  );
}
