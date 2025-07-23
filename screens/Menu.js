// screens/MainScreen.js
import React from 'react';
import { View, Button, StyleSheet, Image,Text, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
        
        <Image style={styles.gaddi} source={require('../assets/adhi kati.png')} />
        <Image style={styles.pakcruize} source={require('../assets/Text.png')} />
       
    <View style={styles.box} >
      <TouchableOpacity style={styles.button}  title="Login" onPress={() => navigation.navigate('Login')} >
        <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} title="Signup" onPress={() => navigation.navigate('Signup')} >
        <Text style={styles.text}>SignUp</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#2F2F2F",
    alignItems: 'center',
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
  box:{
    flexDirection: "row",
    margin: 10,
  },
  button:{
     flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BCC6CC',
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
  },
  text:{
    color:"#2F2F2F",
    fontWeight:"bold",
  },
});
