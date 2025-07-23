import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Highlight() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
       
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/lambo.jpg')} />
           
        </View>
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/bmw.jpg')} />
          
        </View>
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/bentley.jpg')}  />
            
        </View>
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/toyota.jpg')}  />
           
        </View>
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/porsche.jpg')} />
            
        </View>
        <View style={styles.highlight}>
            <Image style={styles.highlightdp} source={require('../assets/ferrari.jpg')}  />
            
        </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    text:{ 
        color: "white",
    },
    highlight:{
        height:100,
        width:100,
        flex: 1, justifyContent: 'center', alignItems: 'center' ,
    },
    highlightdp:{
        height:80,
        width:80,
        borderRadius:100,
        borderColor: "grey",
        borderWidth: 2
    },

})