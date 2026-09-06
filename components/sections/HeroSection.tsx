import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { AnimatedSection } from '../ui/AnimatedSection';
import { TypewriterText } from '../ui/TypewriterText';
import { personalData } from '../../lib/data';
import { getProfileImage } from '../../lib/images';
import { isValidUrl } from '../../lib/utils';

interface HeroSectionProps {
  onContactPress: () => void;
}

export function HeroSection({ onContactPress }: HeroSectionProps) {
  const handleDownloadCV = () => {
    if (isValidUrl(personalData.contact.resume)) {
      Linking.openURL(personalData.contact.resume);
    }
  };

  return (
    <View className="px-5 pt-16 pb-10">
      <AnimatedSection delay={0}>
        {/* Profile Image */}
        <View className="items-center mb-6">
          <View
            style={{
              padding: 3,
              borderRadius: 999,
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: '#7c3aed',
            }}
          >
            <Image
              source={getProfileImage()}
              style={{ width: 140, height: 140, borderRadius: 70 }}
              resizeMode="cover"
            />
          </View>
        </View>
      </AnimatedSection>

      <AnimatedSection delay={150}>
        {/* Greeting */}
        <Text className="text-center text-muted-foreground text-base mb-1">
          Hi there, I'm
        </Text>

        {/* Name with Typewriter */}
        <View className="items-center mb-2">
          <TypewriterText
            text={personalData.name}
            style={{
              fontSize: 32,
              fontFamily: 'SpaceGrotesk_700Bold',
              color: '#fafafa',
              textAlign: 'center',
            }}
          />
        </View>

        {/* Title */}
        <Text
          className="text-center text-primary text-sm font-medium mb-4"
          style={{ fontFamily: 'PTSans_400Regular' }}
        >
          {personalData.title}
        </Text>

        {/* Bio */}
        <Text
          className="text-center text-muted-foreground text-sm leading-relaxed mb-8 px-2"
          style={{ fontFamily: 'PTSans_400Regular', lineHeight: 22 }}
        >
          {personalData.bio}
        </Text>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        {/* CTA Buttons */}
        <View className="flex-row gap-3 justify-center">
          <TouchableOpacity
            onPress={onContactPress}
            className="flex-1 items-center rounded-lg py-3 bg-primary"
            style={{ maxWidth: 160 }}
          >
            <Text className="text-white font-semibold text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
              Contact Me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleDownloadCV}
            className="flex-1 items-center rounded-lg py-3 border border-primary"
            style={{ maxWidth: 160 }}
          >
            <Text className="text-primary font-semibold text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
              Download CV
            </Text>
          </TouchableOpacity>
        </View>
      </AnimatedSection>
    </View>
  );
}
