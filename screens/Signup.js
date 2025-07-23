// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      // Save additional user data to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        phone,
        gender,
        email,
        createdAt: new Date(),
      });

      navigation.navigate('Login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.body}>
    <View style={styles.images}>
            <Image style={styles.gaddi} source={require('../assets/adhi kati.png')} />
            <Image style={styles.pakcruize} source={require('../assets/Text.png')} />
          </View>
    <View style={styles.dingadabba}>
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Gender" value={gender} onChangeText={setGender} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} title="Sign Up" onPress={handleSignup} ><Text style={styles.text}>Signup</Text></TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    paddingTop:30, 
    marginTop: 50, 
  },
  input: {
    borderBottomWidth: 1, 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5,
    borderColor:"#2F2F2F" 
  },
  error: { 
    color: 'red',
    marginTop: 10 
    },

  body:{
    backgroundColor: "#2F2F2F",
    flex:1,
    justifyContent: 'space-between',
  },
  dingadabba:{
    flex:0.8,
    backgroundColor: '#BCC6CC',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
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
  images:{
    flex:0.2,
    justifyContent:"center",
    alignItems:"center",
  },
  button:{
    
    alignItems: 'center',
    backgroundColor: '#2F2F2F',
    paddingVertical: 10,
    
    borderRadius: 10,
    
  },
  text:{
    color:"#BCC6CC",
    fontWeight:"bold",
  },
});

