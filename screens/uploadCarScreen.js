import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Picker } from '@react-native-picker/picker';


const UploadCarScreen = () => {
  const [carName, setCarName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [number, setNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [demand, setDemand] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadToCloudinary = async () => {
    const data = new FormData();
    data.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: 'upload.jpg',
    });
    data.append('upload_preset', 'unsigned_preset');
    data.append('folder', 'cars');
    data.append('cloud_name', 'douaxb1k6');

    const res = await fetch('https://api.cloudinary.com/v1_1/douaxb1k6/image/upload', {
      method: 'POST',
      body: data,
    });

    const file = await res.json();
    return file.secure_url;
  };

  const handleUpload = async () => {
    if (!carName || !brand || !model || !number || !owner || !description || !demand || !image) {
  Alert.alert('Error', 'Please fill all fields and select an image');
  return;
}


    try {
      const imageUrl = await uploadToCloudinary();

      await addDoc(collection(db, 'cars'), {
        carName,
        brand,
        model,
        number,
        owner,
        description,
        demand,
        image: imageUrl,
        status: 'available',
        createdAt: new Date(),
      });

      Alert.alert('Success', 'Car uploaded!');
      setCarName('');
      setBrand('');
      setModel('');
      setNumber('');
      setOwner('');
      setDescription('');
      setImage(null);
    } catch (error) {
      console.error('Upload failed:', error);
      Alert.alert('Error', 'Upload failed.');
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.logo}>
                    <Text style={styles.header}>Vehicle Details</Text>
                </View>
    <View style={styles.container}>
      
      <TextInput placeholder="Owner Name" placeholderTextColor="#BCC6CC" value={owner} onChangeText={setOwner} style={styles.input} />
      <TextInput placeholder="Owner Number" placeholderTextColor="#BCC6CC" value={number} onChangeText={setNumber} style={styles.input} />
      <TextInput placeholder="Car Name" placeholderTextColor="#BCC6CC" value={carName} onChangeText={setCarName} style={styles.input} />
      <View style={styles.inputGroup}>
  
  <View style={styles.pickerWrapper}>
    <Picker
      selectedValue={brand}
      onValueChange={(itemValue) => setBrand(itemValue)}
      style={styles.picker}
    >
      <Picker.Item label="Select Brand" value="" />
      <Picker.Item label="Toyota" value="Toyota" />
      <Picker.Item label="Honda" value="Honda" />
      <Picker.Item label="Suzuki" value="Suzuki" />
      <Picker.Item label="Hyundai" value="Hyundai" />
      <Picker.Item label="Kia" value="Kia" />
      <Picker.Item label="Nissan" value="Nissan" />
      <Picker.Item label="BMW" value="BMW" />
      <Picker.Item label="Mercedes" value="Mercedes" />
      <Picker.Item label="Audi" value="Audi" />
    </Picker>
  </View>
</View>
      <TextInput placeholder="Model" placeholderTextColor="#BCC6CC" value={model} onChangeText={setModel} style={styles.input} />
      <TextInput placeholder="Demand (PKR)" placeholderTextColor="#BCC6CC" value={demand} onChangeText={setDemand} style={styles.input} keyboardType="numeric"/>
      <TextInput placeholder="Description" placeholderTextColor="#BCC6CC" value={description} onChangeText={setDescription} style={styles.input} multiline />

      {/* <Button title="Pick Image from Gallery" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Upload Car" onPress={handleUpload} color="green" />
       */}
      <View style={styles.box}>
                    <TouchableOpacity style={styles.button} title="ViewCarsScreen" onPress={pickImage}  >
                    <Text style={styles.buttontext}>Pick Image from Gallery</Text>
                  </TouchableOpacity>
                  {image && <Image source={{ uri: image }} style={styles.image} />}
            <TouchableOpacity style={styles.button} title="UploadCarScreen" onPress={handleUpload} >
                          <Text style={styles.buttontext}>Upload Car</Text>
                        </TouchableOpacity>
              </View>


    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 ,marginBottom:200,},
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8, color:"#BCC6CC", borderColor:"#BCC6CC" },
  image: { width: '100%', height: 200, marginVertical: 10 },
  body:{
    flex: 1,
    justifyContent:"space-between",
    backgroundColor:"#2F2F2F"
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
    
    margin: 10,
    justifyContent:"space-between"
  },
  button:{
    
    alignItems: 'center',
    backgroundColor: '#BCC6CC',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  picker:{
    color:"#BCC6CC",
    borderBottomWidth:1,
    borderColor:"#BCC6CC",
},
  header:{
    color:"#BCC6CC",
    fontWeight:"bold",
    fontSize:23,
    marginTop:20,
  }
});

export default UploadCarScreen;
