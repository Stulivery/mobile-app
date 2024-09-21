import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const CustomLoader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  // First, set up the animation for the spinning logo
  useEffect(() => {
    // Loop the animation forever
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,  // Duration of one full rotation (1000ms = 1 second)
        useNativeDriver: true,  // Use native driver for better performance
      })
    ).start();
  }, []);

  // Second, interpolate the rotation from the spinValue
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],  // Rotate the logo from 0 to 360 degrees
  });

  return (
    <View style={styles.container}>
      {/* Apply the spin animation to the logo */}
      <Animated.Image
        source={require('../assets/images/logo.png')} 
        resizeMode="contain" // Replace with your logo
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',  // Set the background color for the loader
  },
  logo: {
    width: 36,  // Adjust the size of the logo
    height:36,  // Adjust the size of the logo
  },
});

export default CustomLoader;
