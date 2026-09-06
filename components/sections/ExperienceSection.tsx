import React from 'react';
import { View, Text, Image } from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../lib/data';
import { getExperienceLogo } from '../../lib/images';

export function ExperienceSection() {
  return (
    <View className="px-5 py-10">
      <AnimatedSection>
        <SectionHeader title="Experience" subtitle="My professional journey" />
      </AnimatedSection>

      {/* Timeline */}
      <View style={{ paddingLeft: 20 }}>
        {experienceData.map((exp, index) => (
          <AnimatedSection key={`${exp.company}-${index}`} delay={index * 100}>
            <View style={{ flexDirection: 'row', marginBottom: 28 }}>
              {/* Timeline left side */}
              <View style={{ alignItems: 'center', marginRight: 16, width: 16 }}>
                {/* Dot */}
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    backgroundColor: '#7c3aed',
                    marginTop: 18,
                    zIndex: 1,
                  }}
                />
                {/* Line */}
                {index < experienceData.length - 1 && (
                  <View
                    style={{
                      width: 2,
                      flex: 1,
                      backgroundColor: '#3f3f46',
                      marginTop: 4,
                    }}
                  />
                )}
              </View>

              {/* Card */}
              <View
                className="flex-1 bg-card border border-border rounded-xl p-4"
                style={{ marginLeft: 4 }}
              >
                {/* Header: Logo + Company */}
                <View className="flex-row items-center mb-2">
                  {exp.imageUrl && (
                    <Image
                      source={getExperienceLogo(exp.imageUrl)}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        marginRight: 10,
                        backgroundColor: '#27272a',
                      }}
                      resizeMode="contain"
                    />
                  )}
                  <View className="flex-1">
                    <Text
                      className="text-foreground font-bold text-sm"
                      style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                      numberOfLines={2}
                    >
                      {exp.role}
                    </Text>
                    <Text
                      className="text-primary text-xs"
                      style={{ fontFamily: 'PTSans_400Regular' }}
                    >
                      {exp.company}
                    </Text>
                  </View>
                </View>

                {/* Duration */}
                <Text
                  className="text-muted-foreground text-xs mb-3"
                  style={{ fontFamily: 'PTSans_400Regular' }}
                >
                  {exp.duration}
                </Text>

                {/* Description */}
                {exp.description.map((desc, i) => (
                  <View key={i} className="flex-row mb-1.5">
                    <Text className="text-primary text-xs mr-2">•</Text>
                    <Text
                      className="text-muted-foreground text-xs flex-1 leading-relaxed"
                      style={{ fontFamily: 'PTSans_400Regular', lineHeight: 18 }}
                    >
                      {desc}
                    </Text>
                  </View>
                ))}

                {/* Skills */}
                <View className="flex-row flex-wrap gap-1.5 mt-3">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} label={skill} />
                  ))}
                </View>
              </View>
            </View>
          </AnimatedSection>
        ))}
      </View>
    </View>
  );
}