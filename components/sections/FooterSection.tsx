import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { personalData, navLinks } from '../../lib/data';
import { isValidUrl } from '../../lib/utils';

const SOCIAL_LINKS = [
  { label: 'GitHub', icon: '⌗', url: personalData.contact.github },
  { label: 'LinkedIn', icon: 'in', url: personalData.contact.linkedin },
  { label: 'Twitter', icon: '𝕏', url: personalData.contact.twitter },
  { label: 'Instagram', icon: '◉', url: personalData.contact.instagram },
  { label: 'Facebook', icon: 'f', url: personalData.contact.facebook },
];

interface FooterSectionProps {
  onNavPress: (label: string) => void;
}

export function FooterSection({ onNavPress }: FooterSectionProps) {
  return (
    <View className="px-5 py-8 border-t border-border bg-card">
      {/* Social icons */}
      <View className="flex-row justify-center gap-4 mb-6">
        {SOCIAL_LINKS.map((social) => (
          <TouchableOpacity
            key={social.label}
            onPress={() => isValidUrl(social.url) && Linking.openURL(social.url)}
            className="w-10 h-10 rounded-full border border-border items-center justify-center"
            accessibilityLabel={social.label}
          >
            <Text className="text-muted-foreground text-sm font-bold">{social.icon}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nav links */}
      <View className="flex-row flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
        {navLinks.map((link) => (
          <TouchableOpacity key={link.href} onPress={() => onNavPress(link.label)}>
            <Text className="text-muted-foreground text-xs" style={{ fontFamily: 'PTSans_400Regular' }}>
              {link.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Copyright */}
      <Text
        className="text-center text-muted-foreground text-xs"
        style={{ fontFamily: 'PTSans_400Regular' }}
      >
        © {new Date().getFullYear()} Jeremiah Jimoh. All rights reserved.
      </Text>
    </View>
  );
}