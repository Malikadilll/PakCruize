import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Image, Button, StyleSheet, Alert, SafeAreaView, ScrollView, TouchableOpacity, TextInput }from 'react-native';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, } from 'firebase/firestore';

export default function SearchCarsScreen({ navigation }) {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const snapshot = await getDocs(collection(db, 'cars'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCars(data);
  };

  const filteredCars = cars.filter((car) => {
    const matchesQuery = car.carName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModel = modelFilter ? car.model.toLowerCase().includes(modelFilter.toLowerCase()) : true;
    const matchesPrice = priceFilter ? parseInt(car.demand) <= parseInt(priceFilter) : true;

    return matchesQuery && matchesModel && matchesPrice;
  });
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
          <Text style={styles.title}>💸: PKR {item.demand}</Text>
    
        
    
         
          
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
      data={filteredCars}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={styles.filters}>
            <Text style={styles.header}>Available Cars</Text>
          <TextInput
          placeholderTextColor="#BCC6CC"
            style={styles.input}
            placeholder="Search by brand or car name"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TextInput
          placeholderTextColor="#BCC6CC"
            style={styles.input}
            placeholder="Filter by model"
            value={modelFilter}
            onChangeText={setModelFilter}
          />
          <TextInput
          placeholderTextColor="#BCC6CC"
            style={styles.input}
            placeholder="Max Price (PKR)"
            value={priceFilter}
            onChangeText={setPriceFilter}
            keyboardType="numeric"
          />
        </View>
        
      }
      
      contentContainerStyle={{ padding: 16 }}
      
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filters: {
    marginBottom: 16,
  },
    input: { borderBottomWidth: 1, marginBottom: 10, padding: 8, color:"#BCC6CC", borderColor:"#BCC6CC" },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#2F2F2F',
    borderWidth:1,
    borderColor:'#BCC6CC',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#BCC6CC'
  },
   image: {
    width: 'auto',
    height: 170,
    borderRadius: 8,
    marginBottom: 10,
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
    box:{
    flexDirection: "row",
    margin: 10,
    justifyContent:"center"
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
});
