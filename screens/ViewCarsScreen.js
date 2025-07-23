import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Image, Button, StyleSheet, Alert, SafeAreaView, ScrollView, TouchableOpacity }from 'react-native';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, } from 'firebase/firestore';
import * as Clipboard from 'expo-clipboard';


  export default function ViewCarsScreen({ navigation }) {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'cars'));
      const carList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCars(carList);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
const showSellerNumber = (number) => {
  Alert.alert(
    'Contact Seller',
    `Call or WhatsApp the seller at: ${number}`,
    [
      {
        text: 'Copy Number',
        onPress: () => {
          Clipboard.setStringAsync(number);
          Alert.alert('Copied!', 'Phone number copied to clipboard.');
        },
      },
      { text: 'OK', style: 'cancel' },
    ]
  );
};

  const confirmBuyCar = (carId) => {
    Alert.alert(
      'Confirm Purchase',
      'Are you sure you want to buy this car?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Buy',
          onPress: async () => {
            try {
              await updateDoc(doc(db, 'cars', carId), { status: 'sold' });
              fetchCars();
            } catch (error) {
              console.error('Error marking as sold:', error);
            }
          },
        },
      ]
    );
  };

  const confirmDeleteCar = (carId) => {
    Alert.alert(
      'Delete Listing',
      'Are you sure you want to delete this car?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'cars', carId));
              fetchCars();
            } catch (error) {
              console.error('Error deleting car:', error);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car: item })}>
  

    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.carName}</Text>
      <Text style={styles.title}>Demand: PKR {item.demand}</Text>

      <View style={styles.row}>
      <Text style={styles.texti}>Owner: {item.owner}</Text>
      <Text style={styles.texti}>Number: {item.number}</Text>
      
      </View>
      <View style={styles.row}>
      <Text style={styles.texti}>Brand: {item.brand}</Text>
      <Text style={styles.texti}>Model: {item.model}</Text>
      <Text style={styles.texti}>Status: {item.status}</Text>
      </View>

      <Text style={styles.texti}>Description: {item.description}</Text>
      
      <View style={styles.box}>
                    {/* <TouchableOpacity onPress={() => confirmBuyCar(item.id)} style={styles.button} title="ViewCarsScreen" >
                    <Text style={styles.buytext}>{item.status === 'sold' ? 'Sold' : 'Buy'}</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity onPress={() => showSellerNumber(item.number)} style={styles.button}>
                  <Text style={styles.buytext}>Make an Offer</Text>
                  </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => confirmDeleteCar(item.id)} style={styles.button} title="UploadCarScreen"  >
                          <Text style={styles.deletetext}>Delete</Text>
                        </TouchableOpacity> */}
              </View>

      
    </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.body}>
  <FlatList
    data={cars}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    contentContainerStyle={styles.container}
    ListHeaderComponent={() => (
      <Text style={styles.header}>Available Vehicles</Text>
    )}
  />
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
  backgroundColor: '#BCC6CC',
  borderRadius: 15,
  padding: 16,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 10,
},

  image: {
    width: 'auto',
    height: 170,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  body:{
    backgroundColor:"#2F2F2F",
    flex:1,
  },
  header:{
    color:"#BCC6CC",
    marginTop:40,
    textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    

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
  logo:{
    alignItems:"center",
    marginTop:50,    
  },
   box:{
    flexDirection: "row",
    margin: 10,
    justifyContent:"space-between"
  },
  button:{
    
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  deletetext:{
    color:"red",
    fontWeight:"bold"
  },
  buytext:{
    color:"green",
    fontWeight:"bold"
  },
  row:{
    flexDirection:"row"

  },
  texti:{
    marginLeft:20,
  },
});

