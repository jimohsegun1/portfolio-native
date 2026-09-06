import React, { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import { useColorScheme } from 'nativewind';
import { skillsData } from '../../lib/data';
import type { Skill } from '../../lib/data';

type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Mobile' | 'Other';
const TABS: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Mobile', 'Other'];

function SkillIcon({ uri, name }: { uri: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed || !uri) {
    return (
      <View className="w-8 h-8 rounded-lg bg-secondary items-center justify-center">
        <Text className="text-primary text-base" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
          {name.charAt(0).toUpperCase()}
        </Text>
      </View>
    );
  }

  return <SvgUri uri={uri} width={32} height={32} onError={() => setFailed(true)} />;
}

export default function SkillsScreen() {
  const { colorScheme } = useColorScheme();
  const [activeTab, setActiveTab] = useState<SkillCategory>('All');
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const filtered: Skill[] =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  const handleTabChange = (tab: SkillCategory) => {
    if (tab === activeTab) return;
    Animated.timing(fadeAnim, { toValue: 0, duration: 120, useNativeDriver: true }).start(() => {
      setActiveTab(tab);
      Animated.timing(fadeAnim, { toValue: 1, duration: 180, useNativeDriver: true }).start();
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Screen Header */}
        <View className="px-5 pt-5 pb-4 border-b border-card-border mb-4">
          <Text className="text-foreground text-[28px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>Skills</Text>
          <Text className="text-muted text-[13px] mt-0.5" style={{ fontFamily: 'PTSans_400Regular' }}>
            Technologies I work with
          </Text>
        </View>

        {/* Segmented Control */}
        <View className="px-5 pb-4">
          <View className="flex-row items-center bg-card rounded-full border border-primary p-1">
            {TABS.map((tab, index) => {
              const active = activeTab === tab;
              const nextActive = activeTab === TABS[index + 1];
              return (
                <React.Fragment key={tab}>
                  {index > 0 && !active && !nextActive && (
                    <View className="w-px h-4 bg-secondary-border" />
                  )}
                  <TouchableOpacity
                    onPress={() => handleTabChange(tab)}
                    className={`flex-1 py-2.5 rounded-full items-center ${active ? 'bg-primary' : ''}`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-xs ${active ? 'text-white' : 'text-muted-foreground'}`}
                      style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                      numberOfLines={1}
                    >
                      {tab}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </View>
        </View>

        {/* Skills Grid — Animated.View carries only the opacity value */}
        <Animated.View style={{ opacity: fadeAnim }} className="flex-row flex-wrap px-4 gap-2.5">
          {filtered.map((skill, i) => (
            <View key={`${skill.name}-${i}`} className="w-[30%] bg-card rounded-2xl border border-card-border items-center py-4 px-2">
              <View className="w-12 h-12 bg-secondary rounded-xl items-center justify-center mb-2.5">
                <SkillIcon uri={skill.imageUrl} name={skill.name} />
              </View>
              <Text
                className="text-muted-foreground text-xs text-center"
                style={{ fontFamily: 'PTSans_400Regular' }}
                numberOfLines={1}
              >
                {skill.name}
              </Text>
            </View>
          ))}
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
