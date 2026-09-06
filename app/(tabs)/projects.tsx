import React, { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import { Badge } from '../../components/ui/Badge';
import { ProjectModal } from '../../components/ProjectModal';
import { projectsData, Project } from '../../lib/data';
import { getProjectImage } from '../../lib/images';

type Category = 'All' | 'WEB APP' | 'ANDROID APP' | 'MACHINE LEARNING';
const TABS: { label: string; value: Category }[] = [
  { label: 'All',     value: 'All' },
  { label: 'Web',     value: 'WEB APP' },
  { label: 'Android', value: 'ANDROID APP' },
  { label: 'ML',      value: 'MACHINE LEARNING' },
];

const CATEGORY_COLOR: Record<string, string> = {
  'WEB APP':          '#7c3aed',
  'ANDROID APP':      '#0ea5e9',
  'MACHINE LEARNING': '#f59e0b',
};

export default function ProjectsScreen() {
  const { colorScheme } = useColorScheme();
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const sheetRef = useRef<BottomSheet | null>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const filtered =
    activeTab === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  const handleTabChange = (tab: Category) => {
    if (tab === activeTab) return;
    Animated.timing(fadeAnim, { toValue: 0, duration: 120, useNativeDriver: true }).start(() => {
      setActiveTab(tab);
      Animated.timing(fadeAnim, { toValue: 1, duration: 180, useNativeDriver: true }).start();
    });
  };

  const openProject = (project: Project) => {
    setSelected(project);
    sheetRef.current?.expand();
  };

  const catColor = (cat: string) => CATEGORY_COLOR[cat] ?? '#7c3aed';

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* Screen Header */}
        <View className="px-5 pt-5 pb-4 border-b border-card-border mb-4">
          <Text className="text-foreground text-[28px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>Projects</Text>
          <Text className="text-muted text-[13px] mt-0.5" style={{ fontFamily: 'PTSans_400Regular' }}>
            Things I've built
          </Text>
        </View>

        {/* Segmented Control */}
        <View className="px-5 pb-4">
          <View className="flex-row items-center bg-card rounded-full border border-primary p-1">
            {TABS.map((tab, index) => {
              const active = activeTab === tab.value;
              const nextActive = activeTab === TABS[index + 1]?.value;
              return (
                <React.Fragment key={tab.value}>
                  {index > 0 && !active && !nextActive && (
                    <View className="w-px h-4 bg-secondary-border" />
                  )}
                  <TouchableOpacity
                    onPress={() => handleTabChange(tab.value)}
                    className={`flex-1 py-2.5 rounded-full items-center ${active ? 'bg-primary' : ''}`}
                    activeOpacity={0.8}
                  >
                    <Text
                      className={`text-xs ${active ? 'text-white' : 'text-muted-foreground'}`}
                      style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                      numberOfLines={1}
                    >
                      {tab.label}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </View>
        </View>

        {/* Project Cards — Animated.View carries only opacity */}
        <Animated.View style={{ opacity: fadeAnim }} className="px-4 gap-3.5">
          {filtered.map((project, i) => (
            <TouchableOpacity
              key={`${project.name}-${i}`}
              onPress={() => openProject(project)}
              className="bg-card rounded-2xl border border-card-border overflow-hidden"
              activeOpacity={0.85}
            >
              <Image
                source={getProjectImage(project.imageId)}
                style={{ width: '100%', height: 170 }}
                resizeMode="cover"
              />
              {/* Category pill — uses per-category brand colors, not theme tokens */}
              <View
                style={{
                  backgroundColor: catColor(project.category) + '22',
                  borderColor: catColor(project.category) + '55',
                }}
                className="absolute top-3 right-3 flex-row items-center gap-1 px-2.5 py-1 rounded-full border"
              >
                <View style={{ backgroundColor: catColor(project.category) }} className="w-1.5 h-1.5 rounded-full" />
                <Text
                  style={{ color: catColor(project.category), fontFamily: 'PTSans_400Regular', fontWeight: '600', fontSize: 10 }}
                >
                  {project.category}
                </Text>
              </View>

              <View className="p-4">
                <Text
                  className="text-foreground text-base mb-1.5"
                  style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
                  numberOfLines={1}
                >
                  {project.name}
                </Text>
                <Text
                  className="text-muted text-[13px] leading-[19px] mb-3"
                  style={{ fontFamily: 'PTSans_400Regular' }}
                  numberOfLines={2}
                >
                  {project.description}
                </Text>
                <View className="flex-row flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} label={tag} />
                  ))}
                  {project.tags.length > 3 && (
                    <View className="bg-card-border rounded-full px-2 py-0.5">
                      <Text className="text-muted-foreground text-[11px]">
                        +{project.tags.length - 3}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>

      </ScrollView>

      <ProjectModal project={selected} sheetRef={sheetRef} />
    </SafeAreaView>
  );
}
