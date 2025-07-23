// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Image } from 'react-native';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { TouchableOpacity } from 'react-native';

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such user document!');
        }
      }
    } catch (error) {
      console.log('Error getting user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigation.replace('Loading2');
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.body}>
      <View style={styles.logo}>
              <Image style={styles.gaddi} source={require('../assets/adhi kati.png')} />
              <Image style={styles.pakcruize} source={require('../assets/Text.png')} />
          </View>
    <View style={styles.container}>
      <Text style={styles.header}>Hello, {userData?.name}!</Text>
      <Text style={styles.text}>Email: {userData?.email}</Text>
      <Text style={styles.text}>Phone: {userData?.phone}</Text>
      <Text style={styles.text}>Gender: {userData?.gender}</Text>
      <View style={styles.box}>
              
        </View>
      <TouchableOpacity style={styles.button} title="UploadCarScreen" onPress={handleLogout} >
                    <Text style={styles.buttontext}>Log Out</Text>
                  </TouchableOpacity>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{flex: 1 , backgroundColor:"#2F2F2F"},
  container: { flex: 1, justifyContent: 'center', padding: 20},
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: "#BCC6CC" },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box:{
    flexDirection: "row",
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
  text:{
    color: "#BCC6CC"
  },
  buttontext:{
    color:"#2F2F2F",
    fontWeight:"bold"
  }
});
