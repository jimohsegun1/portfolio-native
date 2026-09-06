import React from 'react';
import { View, Text, Image } from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { educationData } from '../../lib/data';
import { getEducationLogo } from '../../lib/images';

export function EducationSection() {
  return (
    <View className="px-5 py-10">
      <AnimatedSection>
        <SectionHeader title="Education" subtitle="My academic background" />
      </AnimatedSection>

      <View className="gap-4">
        {educationData.map((edu, index) => (
          <AnimatedSection key={`${edu.institution}-${index}`} delay={index * 100}>
            <View className="bg-card border border-border rounded-xl p-4">
              {/* Header */}
              <View className="flex-row items-center mb-3">
                <Image
                  source={getEducationLogo(edu.imageUrl)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    marginRight: 12,
                    backgroundColor: '#27272a',
                  }}
                  resizeMode="contain"
                />
                <View className="flex-1">
                  <Text
                    className="text-foreground font-bold text-sm"
                    style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                  >
                    {edu.degree}
                  </Text>
                  <Text
                    className="text-primary text-xs mt-0.5"
                    style={{ fontFamily: 'PTSans_400Regular' }}
                    numberOfLines={2}
                  >
                    {edu.institution}
                  </Text>
                </View>
              </View>

              {/* Duration */}
              <View className="flex-row items-center mb-3">
                <View className="bg-primary/20 rounded-full px-2.5 py-0.5">
                  <Text className="text-primary text-xs" style={{ fontFamily: 'PTSans_400Regular' }}>
                    {edu.duration}
                  </Text>
                </View>
              </View>

              {/* Achievements */}
              {edu.achievements.map((achievement, i) => (
                <View key={i} className="flex-row">
                  <Text className="text-primary text-xs mr-2">★</Text>
                  <Text
                    className="text-muted-foreground text-xs flex-1"
                    style={{ fontFamily: 'PTSans_400Regular', lineHeight: 18 }}
                  >
                    {achievement}
                  </Text>
                </View>
              ))}
            </View>
          </AnimatedSection>
        ))}
      </View>
    </View>
  );
}