import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const TopRefresh = (props) => {
  // const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // { translateX: withSpring(translateX.value, SPRING_CONFIG) },
      { translateY: withSpring(translateY.value, SPRING_CONFIG) },
      ],
    };
  });

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
      // ctx.x = translateX.value;
    },
    onActive: (event, ctx) => {
      const currentPosX = ctx.x + event.translationX;
      const currentPosY = ctx.y + event.translationY;
      translateY.value = currentPosY;
      // translateX.value = currentPosX;
    },
    onEnd: (event) => {
      if (translateY.value > 0) {
        translateY.value = 0;
      }
    },
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.View>
        <Text
          style={{
            position: "absolute",
            top: 0,
          }}
        >
          topRefresh
        </Text>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[rStyle]}>{props.children}</Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default TopRefresh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
