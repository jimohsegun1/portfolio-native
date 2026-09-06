import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { skillsData } from '../../lib/data';
import type { Skill } from '../../lib/data';

type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Mobile' | 'Other';
const TABS: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Mobile', 'Other'];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<SkillCategory>('All');

  const filteredSkills: Skill[] =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <View className="px-5 py-10">
      <AnimatedSection>
        <SectionHeader title="Skills" subtitle="Technologies I work with" />
      </AnimatedSection>

      {/* Tab Bar */}
      <AnimatedSection delay={100}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
          contentContainerStyle={{ gap: 8, paddingHorizontal: 2 }}
        >
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border ${
                activeTab === tab
                  ? 'bg-primary border-primary'
                  : 'border-border bg-transparent'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  activeTab === tab ? 'text-white' : 'text-muted-foreground'
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </AnimatedSection>

      {/* Skills Grid */}
      <AnimatedSection delay={200}>
        <View className="flex-row flex-wrap gap-3 justify-center">
          {filteredSkills.map((skill) => (
            <View
              key={skill.name}
              className="items-center bg-card border border-border rounded-xl p-4"
              style={{ width: '28%', minWidth: 90 }}
            >
              <Image
                source={{ uri: skill.imageUrl }}
                style={{ width: 40, height: 40, marginBottom: 8 }}
                resizeMode="contain"
              />
              <Text
                className="text-foreground text-xs text-center"
                numberOfLines={1}
                style={{ fontFamily: 'PTSans_400Regular' }}
              >
                {skill.name}
              </Text>
            </View>
          ))}
        </View>
      </AnimatedSection>
    </View>
  );
}