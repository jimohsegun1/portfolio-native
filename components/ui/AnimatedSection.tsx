import React, { ReactNode } from 'react';
import { Animated } from 'react-native';
import { useScrollFadeIn } from '../../hooks/useScrollFadeIn';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  const { opacity, translateY, onLayout } = useScrollFadeIn(delay);

  return (
    <Animated.View
      onLayout={onLayout}
      style={{ opacity, transform: [{ translateY }] }}
      className={className}
    >
      {children}
    </Animated.View>
  );
}
