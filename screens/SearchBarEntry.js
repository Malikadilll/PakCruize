// components/SearchBarEntry.js
import React from 'react';
import { TouchableOpacity, TextInput, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBarEntry() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.searchBar}
      onPress={() => navigation.navigate('Buy')}
    >
      <Ionicons name="search" size={20} color="#999" style={{ marginRight: 10 }} />
      <Text style={styles.placeholder}>Search cars by name or brand</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    padding: 12,
    borderRadius: 10,
    margin: 16,
    borderWidth:1,
    borderColor:"#BCC6CC",
    marginTop:30,
  },
  placeholder: {
    color: '#BCC6CC',
  },
});
