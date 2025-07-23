// components/RecommendedSection.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const RecommendedSection = ({ navigation }) => {
  const [recommendedCars, setRecommendedCars] = useState([]);

  const fetchRecommended = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'cars'));
      const cars = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // For now, just grab the latest 5 cars. Replace this with actual recommendation logic later.
      const recentCars = cars.slice(0, 5);
      setRecommendedCars(recentCars);
    } catch (error) {
      console.error("Error fetching recommended cars:", error);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car: item })} style={styles.card}>
      
       
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.carName}>{item.carName}</Text>
      <Text style={styles.price}>PKR {item.demand}</Text>
      <Text style={styles.model}>{item.brand} {item.model}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔥 Recommended for You</Text>
      <FlatList
        data={recommendedCars}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BCC6CC',
    marginLeft: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#BCC6CC',
    width: 200,
    borderRadius: 12,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 8,
    marginBottom: 6,
  },
  carName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2F2F2F',
  },
  price: {
    color: '#2F2F2F',
    fontWeight: '600',
    marginTop: 2,
  },
  model: {
    fontSize: 12,
    color: '#666',
  },
});

export default RecommendedSection;
