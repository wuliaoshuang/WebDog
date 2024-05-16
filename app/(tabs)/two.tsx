import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutLeft,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring
} from 'react-native-reanimated';

export default function AnimatedStyleUpdateExample() {

  const INITIAL_OFFSET = 10;

  const offset = useSharedValue<number>(-10);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));
  offset.value = withRepeat(withSpring(-offset.value), 1, true);
  return (
    <View style={styles.container}>
      <Animated.View entering={LightSpeedInLeft} exiting={LightSpeedOutLeft} style={[styles.box]} />
      <Button
        title="toggle"
        onPress={() => {
          offset.value = Math.random() * 350;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
});
