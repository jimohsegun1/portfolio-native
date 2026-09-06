import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';
import { sendContactEmail } from '../../lib/emailjs';

export function ContactSection() {
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
      showToast('success', 'Message sent! I\'ll get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      showToast('error', 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="px-5 py-10"
    >
      <AnimatedSection>
        <SectionHeader title="Contact Me" subtitle="Get in touch — I'd love to hear from you" />
      </AnimatedSection>

      {/* Toast */}
      {toast && (
        <View
          className={`mb-4 rounded-lg px-4 py-3 ${
            toast.type === 'success' ? 'bg-primary/20 border border-primary' : 'bg-destructive/20 border border-destructive'
          }`}
        >
          <Text
            className={`text-sm ${toast.type === 'success' ? 'text-primary' : 'text-destructive'}`}
            style={{ fontFamily: 'PTSans_400Regular' }}
          >
            {toast.msg}
          </Text>
        </View>
      )}

      <AnimatedSection delay={100}>
        <View className="gap-4">
          {/* Name */}
          <View>
            <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              placeholderTextColor="#71717a"
              className="bg-card border border-border rounded-lg px-4 py-3 text-foreground"
              style={{ fontFamily: 'PTSans_400Regular', fontSize: 14, color: '#fafafa' }}
            />
          </View>

          {/* Email */}
          <View>
            <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              placeholderTextColor="#71717a"
              keyboardType="email-address"
              autoCapitalize="none"
              className="bg-card border border-border rounded-lg px-4 py-3 text-foreground"
              style={{ fontFamily: 'PTSans_400Regular', fontSize: 14, color: '#fafafa' }}
            />
          </View>

          {/* Message */}
          <View>
            <Text className="text-muted-foreground text-xs mb-1.5" style={{ fontFamily: 'PTSans_400Regular' }}>
              Message
            </Text>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Your message..."
              placeholderTextColor="#71717a"
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              className="bg-card border border-border rounded-lg px-4 py-3 text-foreground"
              style={{ fontFamily: 'PTSans_400Regular', fontSize: 14, color: '#fafafa', minHeight: 120 }}
            />
          </View>

          {/* Submit */}
          <TouchableOpacity
            onPress={handleSubmit}
            disabled={isSubmitting}
            className="bg-primary rounded-lg py-3.5 items-center flex-row justify-center gap-2"
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting && <ActivityIndicator color="white" size="small" />}
            <Text className="text-white font-semibold" style={{ fontFamily: 'SpaceGrotesk_700Bold', fontSize: 15 }}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Text>
          </TouchableOpacity>
        </View>
      </AnimatedSection>
    </KeyboardAvoidingView>
  );
}