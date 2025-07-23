// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import MainScreen from './Menu';
export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // You can navigate to a Home screen or show a message
      navigation.replace('Loading1');
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
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} title="Log In" onPress={handleLogin} ><Text style={styles.text}>Login</Text></TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    <TouchableOpacity title="UploadCarScreen" onPress={() => navigation.navigate('Signup')} >
                        <Text style={styles.bottomtext}>Don't have an account? SignUp</Text>
                      </TouchableOpacity>
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
  bottomtext:{
    textAlign:"center",
    marginTop:20,
    color:"#053BA8",
  },
});
