// screens/SplashScreen.js
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

const SplashScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-200)).current; // starts off-screen top

  useEffect(() => {
    // Start animation
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    // Navigate after delay
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
        <Image style={styles.gaddi} source={require('../assets/adhi kati.png')} />
        <Image style={styles.pakcruize} source={require('../assets/Text.png')} />
      </Animated.View>

      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#2F2F2F",
    alignItems: 'center',
  },
  gaddi:{
    height:58,
    width:195,
  },
  pakcruize:{
    marginTop:5,
    height:20,
    width:200,
  },
  box:{
    flexDirection: "row",
    margin: 10,
  },
  button:{
     flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BCC6CC',
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  text:{
    color:"#2F2F2F",
    fontWeight:"bold",
  },
});

export default SplashScreen;
