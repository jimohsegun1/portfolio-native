import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Badge } from '../ui/Badge';
import { ProjectModal } from '../ProjectModal';
import { projectsData, Project } from '../../lib/data';
import { getProjectImage } from '../../lib/images';

type ProjectCategory = 'All' | 'WEB APP' | 'ANDROID APP' | 'MACHINE LEARNING';
const TABS: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'All' },
  { label: 'Web App', value: 'WEB APP' },
  { label: 'Android', value: 'ANDROID APP' },
  { label: 'ML', value: 'MACHINE LEARNING' },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sheetRef = useRef<BottomSheet | null>(null);

  const filtered =
    activeTab === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    sheetRef.current?.expand();
  };

  return (
    <View className="px-5 py-10">
      <AnimatedSection>
        <SectionHeader title="Projects" subtitle="Some things I've built" />
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
              key={tab.value}
              onPress={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-full border ${
                activeTab === tab.value
                  ? 'bg-primary border-primary'
                  : 'border-border bg-transparent'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  activeTab === tab.value ? 'text-white' : 'text-muted-foreground'
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </AnimatedSection>

      {/* Project Grid */}
      <View className="gap-4">
        {filtered.map((project, index) => (
          <AnimatedSection key={`${project.name}-${index}`} delay={index * 60}>
            <TouchableOpacity
              onPress={() => openProject(project)}
              className="bg-card border border-border rounded-xl overflow-hidden"
              activeOpacity={0.85}
            >
              {/* Image */}
              <Image
                source={getProjectImage(project.imageId)}
                style={{ width: '100%', height: 160 }}
                resizeMode="cover"
              />

              {/* Content */}
              <View className="p-4">
                <View className="flex-row items-start justify-between mb-1">
                  <Text
                    className="text-foreground font-bold text-base flex-1"
                    style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                    numberOfLines={1}
                  >
                    {project.name}
                  </Text>
                  <View className="bg-primary/20 rounded-full px-2 py-0.5 ml-2">
                    <Text className="text-primary text-xs">{project.category}</Text>
                  </View>
                </View>

                <Text
                  className="text-muted-foreground text-xs mb-3"
                  numberOfLines={2}
                  style={{ fontFamily: 'PTSans_400Regular', lineHeight: 18 }}
                >
                  {project.description}
                </Text>

                {/* Tags */}
                <View className="flex-row flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                  {project.tags.length > 3 && (
                    <View className="rounded-full bg-secondary px-2 py-0.5">
                      <Text className="text-muted-foreground text-xs">+{project.tags.length - 3}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </AnimatedSection>
        ))}
      </View>

      <ProjectModal project={selectedProject} sheetRef={sheetRef} />
    </View>
  );
}