import { useRef, useCallback } from 'react';
import { Animated } from 'react-native';

export function useScrollFadeIn(delay = 0) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;
  const hasAnimated = useRef(false);

  const onLayout = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translateY, delay]);

  return { opacity, translateY, onLayout };
}