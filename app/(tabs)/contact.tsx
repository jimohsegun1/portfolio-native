import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { AnimatedSection } from '../../components/ui/AnimatedSection';
import { personalData } from '../../lib/data';
import { isValidUrl } from '../../lib/utils';
import { sendContactEmail } from '../../lib/emailjs';

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
  { label: 'Facebook',  icon: 'logo-facebook',  url: personalData.contact.facebook,  color: '#1877f2' },
];

// TextInput colors — className unreliable for bg/border/text/placeholder on some platforms
const INPUT_COLORS = {
  dark:  { bg: '#1c1c1f', border: '#3f3f46', text: '#fafafa', ph: '#71717a' },
  light: { bg: '#f4f4f5', border: '#d4d4d8', text: '#09090b', ph: '#71717a' },
};

export default function ContactScreen() {
  const { colorScheme } = useColorScheme();
  const ic = INPUT_COLORS[colorScheme === 'dark' ? 'dark' : 'light'];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const showToast = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast('error', 'Please fill in all fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      await sendContactEmail({ name, email, message });
      showToast('success', "Message sent! I'll get back to you soon.");
      setName(''); setEmail(''); setMessage('');
    } catch {
      showToast('error', 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    backgroundColor: ic.bg,
    borderWidth: 1,
    borderColor: ic.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: ic.text,
    fontFamily: 'PTSans_400Regular',
    fontSize: 14,
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Screen Header */}
          <View className="px-5 pt-5 pb-4 border-b border-card-border mb-4">
            <Text className="text-foreground text-[28px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>Contact</Text>
            <Text className="text-muted text-[13px] mt-0.5" style={{ fontFamily: 'PTSans_400Regular' }}>
              Let's build something together
            </Text>
          </View>

          {/* Social Links Card */}
          <AnimatedSection delay={60}>
            <View className="mx-4 mb-4 bg-card rounded-2xl border border-card-border p-5">
              <View className="flex-row items-center mb-4">
                <View className="w-1 h-5 bg-primary rounded-sm mr-2.5" />
                <Text className="text-foreground text-base" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  Find me on
                </Text>
              </View>
              <View className="flex-row flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <TouchableOpacity
                    key={social.label}
                    onPress={() => isValidUrl(social.url) && Linking.openURL(social.url)}
                    className="items-center gap-1.5"
                    style={{ width: 56 }}
                    activeOpacity={0.75}
                  >
                    <View
                      style={{ borderColor: social.color + '40' }}
                      className="w-12 h-12 rounded-full bg-secondary border items-center justify-center"
                    >
                      <Ionicons name={social.icon} size={20} color={social.color} />
                    </View>
                    <Text className="text-muted text-[10px]" style={{ fontFamily: 'PTSans_400Regular' }}>
                      {social.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={120}>
            <View className="mx-4 mb-4 bg-card rounded-2xl border border-card-border p-5">
              <View className="flex-row items-center mb-4">
                <View className="w-1 h-5 bg-primary rounded-sm mr-2.5" />
                <Text className="text-foreground text-base" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  Send a message
                </Text>
              </View>

              {/* Toast */}
              {toast && (
                <View
                  className={`rounded-xl px-3.5 py-2.5 mb-4 border ${
                    toast.type === 'success'
                      ? 'bg-primary/8 border-primary/25'
                      : 'bg-destructive/8 border-destructive/25'
                  }`}
                >
                  <Text
                    className={`text-[13px] ${toast.type === 'success' ? 'text-primary' : 'text-destructive'}`}
                    style={{ fontFamily: 'PTSans_400Regular' }}
                  >
                    {toast.msg}
                  </Text>
                </View>
              )}

              {/* Name */}
              <View className="mb-3.5">
                <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>Name</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Your name"
                  placeholderTextColor={ic.ph}
                  style={inputStyle}
                />
              </View>

              {/* Email */}
              <View className="mb-3.5">
                <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="your@email.com"
                  placeholderTextColor={ic.ph}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={inputStyle}
                />
              </View>

              {/* Message */}
              <View className="mb-3.5">
                <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>Message</Text>
                <TextInput
                  value={message}
                  onChangeText={setMessage}
                  placeholder="What's on your mind?"
                  placeholderTextColor={ic.ph}
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                  style={[inputStyle, { minHeight: 110, paddingTop: 12 }]}
                />
              </View>

              {/* Submit */}
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary rounded-xl py-[15px] items-center flex-row justify-center mt-1"
                style={isSubmitting ? { opacity: 0.7 } : undefined}
                activeOpacity={0.8}
              >
                {isSubmitting && (
                  <ActivityIndicator color="white" size="small" style={{ marginRight: 8 }} />
                )}
                <Text className="text-white text-[15px]" style={{ fontFamily: 'SpaceGrotesk_700Bold' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Text>
              </TouchableOpacity>
            </View>
          </AnimatedSection>

          {/* Footer note */}
          <AnimatedSection delay={200}>
            <Text
              className="text-center text-secondary-border text-xs mt-2"
              style={{ fontFamily: 'PTSans_400Regular' }}
            >
              © {new Date().getFullYear()} Jeremiah Jimoh · Built with React Native
            </Text>
          </AnimatedSection>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
