import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Clipboard, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CarDetailsScreen({route,navigation}) {
  const { car } = route.params;
  const [showNumber, setShowNumber] = useState(false);

  const handleMakeOffer = () => {
    Alert.alert(
      'Make an Offer',
      'Do you want to contact the seller?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Show Number',
          onPress: () => {
            setShowNumber(true);
            Clipboard.setString(car.number);
            Alert.alert('Copied!', `Number ${car.number} copied to clipboard`);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.hehe}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Ionicons name="arrow-back" size={25} color="#BCC6CC"  /></TouchableOpacity>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.title}>{car.carName}</Text>
      <Text style={styles.title}>Demand: PKR {car.demand}</Text>
      <Text style={styles.text}>Brand: {car.brand}</Text>
      <Text style={styles.text}>Model: {car.model}</Text>
      <Text style={styles.text}>Owner: {car.owner}</Text>
      <Text style={styles.text}>Description: {car.description}</Text>
      <Text style={styles.text}>Status: {car.status}</Text>
      
      </View>
      <View>
        <TextInput
                  placeholderTextColor="#BCC6CC"
                    style={styles.input}
                    placeholder="Comments"
                   
                   
                  />
      <TouchableOpacity onPress={handleMakeOffer} style={styles.button}>
        <Text style={styles.buttonText}>Make an Offer</Text>
      </TouchableOpacity>
      </View>
      </View>
      {showNumber && (
        <Text style={styles.numberText}>Seller's Number: {car.number}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#2F2F2F', flex: 1, paddingTop:50 },
  image: { width: '100%', height: 200, marginBottom: 20, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10,color:'#BCC6CC' },
  button: {
    marginTop: 20,
    backgroundColor: '#BCC6CC',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: 'black', fontWeight: 'bold' },
  numberText: { marginTop: 20, fontSize: 16, color: 'green' },
  text: {color:'#BCC6CC', fontSize:16},
  hehe: { flex: 1,justifyContent:"space-between"},
  input: { borderWidth: 1, marginBottom: 10, padding: 8, color:"#BCC6CC", borderColor:"#BCC6CC", paddingBottom:50 },
  back: {width:50,height:50, backgroundColor:"#053BA8", borderRadius:10, justifyContent:"center",alignItems:"center",marginBottom:20, },
});

