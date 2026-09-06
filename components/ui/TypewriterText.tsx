import React, { useEffect, useRef } from 'react';
import { Text, View, Animated } from 'react-native';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  style?: object;
  className?: string;
}

export function TypewriterText({ text, style, className }: TypewriterTextProps) {
  const displayText = useTypewriter({ text, typingSpeed: 100, deletingSpeed: 60 });
  const cursorOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(cursorOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      ])
    );
    blink.start();
    return () => blink.stop();
  }, [cursorOpacity]);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text className={className} style={style}>
        {displayText}
      </Text>
      <Animated.Text
        className={className}
        style={[style, { opacity: cursorOpacity }]}
      >
        |
      </Animated.Text>
    </View>
  );
}
