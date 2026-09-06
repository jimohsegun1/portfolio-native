import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { personalData } from '../../lib/data';
import { getProfileImage } from '../../lib/images';
import { isValidUrl } from '../../lib/utils';
import { TypewriterText } from '../../components/ui/TypewriterText';
import { AnimatedSection } from '../../components/ui/AnimatedSection';

type SocialEntry = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  url: string;
  color: string;
};

const SOCIAL_LINKS: SocialEntry[] = [
  { label: 'GitHub',    icon: 'logo-github',    url: personalData.contact.github,    color: '#fafafa' },
  { label: 'LinkedIn',  icon: 'logo-linkedin',  url: personalData.contact.linkedin,  color: '#0a66c2' },
  { label: 'Twitter',   icon: 'logo-twitter',   url: personalData.contact.twitter,   color: '#1d9bf0' },
  { label: 'Instagram', icon: 'logo-instagram', url: personalData.contact.instagram, color: '#e1306c' },
];

const STATS = [
  { number: '10+', label: 'Projects' },
  { number: '5+',  label: 'Years Exp' },
  { number: '5+',  label: 'Companies' },
];

export default function HomeScreen() {
  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>

        {/* ── Hero Card ─────────────────────────────── */}
        <View className="bg-card pt-9 pb-7 px-6 items-center border-b border-card-border">

          {/* Theme toggle */}
          <TouchableOpacity
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-secondary border border-secondary-border items-center justify-center"
            onPress={toggleColorScheme}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isDark ? 'sunny-outline' : 'moon-outline'}
              size={20}
              color={isDark ? '#a1a1aa' : '#52525b'}
            />
          </TouchableOpacity>

          <AnimatedSection delay={0}>
            <View className="w-[110px] h-[110px] rounded-full border-[3px] border-primary mb-4 overflow-hidden bg-card-border">
              <Image source={getProfileImage()} className="w-full h-full" resizeMode="cover" />
            </View>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <View className="items-center mb-1.5">
              <TypewriterText
                text={personalData.name}
                style={{ fontFamily: 'SpaceGrotesk_700Bold', fontSize: 26, color: isDark ? '#fafafa' : '#09090b', textAlign: 'center' }}
              />
            </View>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <View className="flex-row items-center gap-1.5 bg-success-bg/13 border border-success-border/25 rounded-full px-3 py-1 mb-2">
              <View className="w-1.5 h-1.5 rounded-full bg-success-text" />
              <Text className="text-success-text text-[11px]" style={{ fontFamily: 'PTSans_400Regular' }}>
                Available for work
              </Text>
            </View>
          </AnimatedSection>

          <AnimatedSection delay={210}>
            <Text
              className="text-muted-foreground text-xs text-center mb-5 px-2"
              style={{ fontFamily: 'PTSans_400Regular', lineHeight: 18 }}
              numberOfLines={2}
            >
              {personalData.title}
            </Text>
          </AnimatedSection>

          {/* Social icons */}
          <AnimatedSection delay={260}>
            <View className="flex-row gap-2.5 mb-5">
              {SOCIAL_LINKS.map((social) => (
                <TouchableOpacity
                  key={social.label}
                  onPress={() => isValidUrl(social.url) && Linking.openURL(social.url)}
                  className="w-[42px] h-[42px] rounded-full border border-secondary-border bg-secondary items-center justify-center"
                  activeOpacity={0.7}
                  accessibilityLabel={social.label}
                >
                  <Ionicons name={social.icon} size={18} color={social.color} />
                </TouchableOpacity>
              ))}
            </View>
          </AnimatedSection>

          {/* CTA buttons */}
          <AnimatedSection delay={320}>
            <View className="flex-row gap-3 w-full">
              <TouchableOpacity
                onPress={() => router.push('/(tabs)/contact')}
                className="flex-1 bg-primary rounded-xl py-3.5 items-center"
                activeOpacity={0.8}
              >
                <Text className="text-white text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  Contact Me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => isValidUrl(personalData.contact.resume) && Linking.openURL(personalData.contact.resume)}
                className="flex-1 border-[1.5px] border-primary rounded-xl py-3.5 items-center"
                activeOpacity={0.8}
              >
                <Text className="text-primary text-sm" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  Download CV
                </Text>
              </TouchableOpacity>
            </View>
          </AnimatedSection>
        </View>

        {/* ── Stats Row ─────────────────────────────── */}
        <AnimatedSection delay={380}>
          <View className="flex-row px-4 pt-4 gap-2.5">
            {STATS.map((stat) => (
              <View key={stat.label} className="flex-1 bg-card rounded-2xl py-4 items-center border border-card-border">
                <Text className="text-primary text-[22px] mb-0.5" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  {stat.number}
                </Text>
                <Text className="text-muted text-[11px]" style={{ fontFamily: 'PTSans_400Regular' }}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>
        </AnimatedSection>

        {/* ── About Card ────────────────────────────── */}
        <AnimatedSection delay={440}>
          <View className="mx-4 mt-4 bg-card rounded-2xl p-5 border border-card-border">
            <View className="flex-row items-center mb-3">
              <View className="w-1 h-[22px] bg-primary rounded-sm mr-2.5" />
              <Text className="text-foreground text-lg" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                About Me
              </Text>
            </View>
            <Text className="text-muted-foreground text-sm leading-[22px]" style={{ fontFamily: 'PTSans_400Regular' }}>
              {personalData.bio}
            </Text>
          </View>
        </AnimatedSection>

        {/* ── Quick Links ───────────────────────────── */}
        <AnimatedSection delay={500}>
          <View className="mx-4 mt-4 bg-card rounded-2xl p-5 border border-card-border">
            <View className="flex-row items-center mb-3">
              <View className="w-1 h-[22px] bg-primary rounded-sm mr-2.5" />
              <Text className="text-foreground text-lg" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                Quick Links
              </Text>
            </View>
            <View className="gap-2">
              {[
                { label: 'View Skills',  route: '/(tabs)/skills' },
                { label: 'My Projects', route: '/(tabs)/projects' },
                { label: 'Experience',  route: '/(tabs)/experience' },
                { label: 'Get in Touch', route: '/(tabs)/contact' },
              ].map((item) => (
                <TouchableOpacity
                  key={item.label}
                  className="flex-row items-center justify-between bg-secondary rounded-[10px] px-4 py-3.5 border border-secondary-border"
                  onPress={() => router.push(item.route as any)}
                  activeOpacity={0.75}
                >
                  <Text className="text-foreground text-sm" style={{ fontFamily: 'PTSans_400Regular' }}>
                    {item.label}
                  </Text>
                  <Text className="text-primary text-base" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                    →
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </AnimatedSection>

      </ScrollView>
    </SafeAreaView>
  );
}
