import React, { useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { useColorScheme } from 'nativewind';
import { Project } from '../lib/data';
import { Badge } from './ui/Badge';
import { getProjectImage } from '../lib/images';
import { isValidUrl } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  sheetRef: React.RefObject<BottomSheet | null>;
}

export function ProjectModal({ project, sheetRef }: ProjectModalProps) {
  const { colorScheme } = useColorScheme();
  const snapPoints = useMemo(() => ['65%', '90%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: colorScheme === 'dark' ? '#111113' : '#f8f8f8' }}
      handleIndicatorStyle={{ backgroundColor: colorScheme === 'dark' ? '#3f3f46' : '#e4e4e7', width: 40 }}
    >
      <BottomSheetScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
      >
        {project && (
          <>
            {/* Project Image */}
            <Image
              source={getProjectImage(project.imageId)}
              style={{
                width: '100%',
                height: 180,
                borderRadius: 12,
                marginBottom: 16,
              }}
              resizeMode="cover"
            />

            {/* Category Badge */}
            <View className="flex-row mb-2">
              <View className="bg-primary/20 rounded-full px-3 py-0.5">
                <Text className="text-primary text-xs font-medium">{project.category}</Text>
              </View>
            </View>

            {/* Name */}
            <Text
              className="text-foreground text-xl font-bold mb-2"
              style={{ fontFamily: 'SpaceGrotesk_700Bold' }}
            >
              {project.name}
            </Text>

            {/* Description */}
            <Text
              className="text-muted-foreground text-sm leading-relaxed mb-4"
              style={{ fontFamily: 'PTSans_400Regular', lineHeight: 22 }}
            >
              {project.description}
            </Text>

            {/* Tags */}
            <View className="flex-row flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} label={tag} variant="outline" />
              ))}
            </View>

            {/* Action Buttons */}
            <View className="gap-3">
              {isValidUrl(project.githubUrl) && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(project.githubUrl!)}
                  className="flex-row items-center justify-center gap-2 bg-secondary border border-card-border rounded-lg py-3"
                >
                  <Text className="text-foreground font-medium text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                    View on GitHub
                  </Text>
                </TouchableOpacity>
              )}
              {isValidUrl(project.liveUrl) && (
                <TouchableOpacity
                  onPress={() => Linking.openURL(project.liveUrl!)}
                  className="flex-row items-center justify-center gap-2 bg-primary rounded-lg py-3"
                >
                  <Text className="text-white font-medium text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                    Live Demo
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}