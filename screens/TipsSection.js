// components/TipsSection.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const tips = [
  {
    id: '1',
    title: 'Check Car History',
    icon: 'search',
    description: 'Look up the car’s history using VIN reports.',
  },
  {
    id: '2',
    title: 'Inspect the Engine',
    icon: 'tools',
    description: 'Hire a mechanic to inspect for hidden issues.',
  },
  {
    id: '3',
    title: 'Test Drive',
    icon: 'car',
    description: 'Always take a test drive to check for issues.',
  },
  {
    id: '4',
    title: 'Negotiate Price',
    icon: 'handshake',
    description: 'Research market price and negotiate smartly.',
  },
];

const TipsSection = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <FontAwesome5 name={item.icon} size={24} color="#2F2F2F" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚗 Car Buying Tips</Text>
      <FlatList
        data={tips}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    borderRadius: 10,
    padding: 16,
    width: 200,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    color: '#2F2F2F',
  },
  desc: {
    fontSize: 13,
    marginTop: 4,
    color: '#555',
  },
});

export default TipsSection;
