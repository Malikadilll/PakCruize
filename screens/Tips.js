import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tips = [
  {
    id: '1',
    title: '🛢️ Oil Change',
    short: 'Every 5,000 km or 3 months.',
    detail: 'Changing your engine oil regularly keeps the engine lubricated and prevents wear and tear. Use synthetic oil if possible.',
  },
  {
    id: '2',
    title: '🔋 Battery Check',
    short: 'Check every 6 months.',
    detail: 'Clean terminals and test voltage to avoid surprises. Battery life is usually 2–3 years.',
  },
  {
    id: '3',
    title: '🧼 Car Wash',
    short: 'Once a week to protect paint.',
    detail: 'Dirt buildup damages paint. Use pH-neutral shampoo and wax monthly.',
  },
  {
    id: '4',
    title: '🚿 Tire Rotation',
    short: 'Every 10,000 km.',
    detail: 'Helps with even tire wear and improves mileage and ride smoothness.',
  },
];

const MaintenanceTipsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.short}>{item.short}</Text>
      <Text style={styles.detail}>{item.detail}</Text>
    </View>
  );

  return (
    <FlatList
      data={tips}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<Text style={styles.text}>
        Maintenance Tips
      </Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#2F2F2F',
    flex:1,
  },
  card: {
    marginTop:10,
    backgroundColor: '#BCC6CC',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  short: {
    fontSize: 14,
    marginBottom: 6,
  },
  detail: {
    fontSize: 13,
    color: '#333',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:20,
    color:"#BCC6CC"

  }
});

export default MaintenanceTipsScreen;
