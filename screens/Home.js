import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBarEntry from './SearchBarEntry'
import Highlight from './Highlight';
import CarSlideShow from './CarSlideShow';
import TipsSection from './TipsSection';
import RecommendedSection from './Recomended';
import PromotionsAndAnnouncements from './Promo';


export default function Home({navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <FontAwesome name="bars" size={32} color="#BCC6CC" />
      
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <FontAwesome name="bell" size={32} color="#BCC6CC" />
      </TouchableOpacity>
      </View>
     <SearchBarEntry/>
     <View style={styles.brandline}>
     <Text style={styles.header}>🌐 Brands</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
     <Text style={styles.seeall}>See All</Text>
     </TouchableOpacity>
     </View>
     <Highlight/>
     <Text style={styles.header}>💡 Featured</Text>
    <CarSlideShow/>
    <TipsSection/>
     <RecommendedSection navigation={navigation} />
     <PromotionsAndAnnouncements/>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


    body:{
    backgroundColor: "#2F2F2F",
    flex:1,
    
  },
  text:{
    color:"#BCC6CC",
  },
  icons:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20,
    marginTop:10,
  },
  brand:{ 
    color:"#BCC6CC",
    marginHorizontal:20,
    fontWeight:"bold",
    fontSize:20,
  },
  brandline:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  seeall:{
    marginHorizontal:20,
    color:"#BCC6CC",
  },
  featured:{
    marginTop:20,
    color:"#BCC6CC",
    marginHorizontal:20,
    fontWeight:"bold",
    fontSize:20,
  },
   header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BCC6CC',
    marginLeft: 16,
    marginBottom: 10,
  },
})