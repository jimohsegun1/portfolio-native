import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { Badge } from '../../components/ui/Badge';
import { experienceData, educationData } from '../../lib/data';
import { getExperienceLogo, getEducationLogo } from '../../lib/images';

type Segment = 'experience' | 'education';

export default function ExperienceScreen() {
  const [segment, setSegment] = useState<Segment>('experience');

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Screen Header */}
        <View className="px-5 pt-5 pb-4 border-b border-card-border">
          <Text className="text-foreground text-[28px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>Journey</Text>
          <Text className="text-muted text-[13px] mt-0.5" style={{ fontFamily: 'PTSans_400Regular' }}>
            My career & academic path
          </Text>
        </View>

        {/* Segmented Control */}
        <View className="px-5 py-4">
          <View className="flex-row bg-card rounded-xl border border-card-border p-1">
            {(['experience', 'education'] as Segment[]).map((seg) => (
              <TouchableOpacity
                key={seg}
                onPress={() => setSegment(seg)}
                className={`flex-1 py-2.5 rounded-[9px] items-center ${segment === seg ? 'bg-primary' : ''}`}
                activeOpacity={0.8}
              >
                <Text
                  className={`text-sm ${segment === seg ? 'text-white' : 'text-muted'}`}
                  style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                >
                  {seg === 'experience' ? 'Experience' : 'Education'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Experience Timeline */}
        {segment === 'experience' && (
          <View className="pl-5 pr-4">
            {experienceData.map((exp, index) => (
              <AnimatedSection key={`${exp.company}-${index}`} delay={index * 80}>
                <View className="flex-row mb-5">
                  {/* Timeline left */}
                  <View className="items-center mr-3.5 w-4">
                    <View
                      className="w-3.5 h-3.5 rounded-full bg-primary mt-[18px] z-10 border-2"
                      style={{ borderColor: '#4c1d95' }}
                    />
                    {index < experienceData.length - 1 && (
                      <View className="w-0.5 flex-1 bg-secondary-border mt-1" />
                    )}
                  </View>
                  {/* Card */}
                  <View className="flex-1 bg-card rounded-2xl border border-card-border p-4">
                    <View className="flex-row items-center mb-2.5">
                      {exp.imageUrl && (
                        <Image
                          source={getExperienceLogo(exp.imageUrl)}
                          className="w-[38px] h-[38px] rounded-[9px] mr-2.5 bg-card-border"
                          resizeMode="contain"
                        />
                      )}
                      <View className="flex-1">
                        <Text
                          className="text-foreground text-[13px] leading-[19px]"
                          style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                          numberOfLines={2}
                        >
                          {exp.role}
                        </Text>
                        <Text className="text-primary text-xs mt-0.5" style={{ fontFamily: 'PTSans_400Regular' }}>
                          {exp.company}
                        </Text>
                      </View>
                    </View>
                    <View className="self-start bg-secondary rounded-full px-2.5 py-[3px] mb-2.5 border border-secondary-border">
                      <Text className="text-muted-foreground text-[11px]" style={{ fontFamily: 'PTSans_400Regular' }}>
                        {exp.duration}
                      </Text>
                    </View>
                    {exp.description.map((desc, i) => (
                      <View key={i} className="flex-row mb-1">
                        <Text className="text-primary text-sm mr-1.5 leading-[19px]">›</Text>
                        <Text
                          className="text-muted-foreground text-xs leading-[19px] flex-1"
                          style={{ fontFamily: 'PTSans_400Regular' }}
                        >
                          {desc}
                        </Text>
                      </View>
                    ))}
                    <View className="flex-row flex-wrap gap-1.5 mt-2.5">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} label={skill} />
                      ))}
                    </View>
                  </View>
                </View>
              </AnimatedSection>
            ))}
          </View>
        )}

        {/* Education */}
        {segment === 'education' && (
          <View className="px-4 gap-3.5">
            {educationData.map((edu, index) => (
              <AnimatedSection key={`${edu.institution}-${index}`} delay={index * 80}>
                <View className="bg-card rounded-2xl border border-card-border p-4">
                  <View className="flex-row items-center mb-2.5">
                    <Image
                      source={getEducationLogo(edu.imageUrl)}
                      className="w-12 h-12 rounded-[10px] mr-3 bg-card-border"
                      resizeMode="contain"
                    />
                    <View className="flex-1">
                      <Text
                        className="text-foreground text-[13px] leading-[19px]"
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
                  <View className="self-start bg-secondary rounded-full px-2.5 py-[3px] mb-2.5 border border-secondary-border">
                    <Text className="text-muted-foreground text-[11px]" style={{ fontFamily: 'PTSans_400Regular' }}>
                      {edu.duration}
                    </Text>
                  </View>
                  {edu.achievements.map((ach, i) => (
                    <View key={i} className="flex-row mb-1">
                      {/* Gold star is a fixed brand color — not a theme token */}
                      <Text style={{ color: '#f59e0b', fontSize: 14, marginRight: 6, lineHeight: 19 }}>★</Text>
                      <Text
                        className="text-muted-foreground text-xs leading-[19px] flex-1"
                        style={{ fontFamily: 'PTSans_400Regular' }}
                      >
                        {ach}
                      </Text>
                    </View>
                  ))}
                </View>
              </AnimatedSection>
            ))}
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
