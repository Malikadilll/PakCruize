import React from 'react';
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const images = [
  { source: require('../assets/Slide1.jpg'), caption: "Luxury Meets Performance" },
  { source: require('../assets/Slide3.jpg'), caption: "Drive Into Elegance" },
  { source: require('../assets/Slide4.jpg'), caption: "Your Dream Car Awaits" },
  { source: require('../assets/Slide2.jpg'), caption: "Style. Speed. Sophistication." },
];

export default function CarSlideShow() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={240}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.source} style={styles.image} resizeMode="cover" />
            <View style={styles.textOverlay}>
              <Text style={styles.text}>{item.caption}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  slide: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
