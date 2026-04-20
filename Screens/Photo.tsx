import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Photo = ({navigation}: {navigation : any}) => {

  const handlePress = ()=>{
    navigation.popToTop()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button 
      title='go to Home' 
      onPress={()=> handlePress()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent : "center",
    justifyContent : "center",
    padding : 20,
    gap : 8,
    backgroundColor : "#fbfd84"

  },
  text : {
    fontSize : 22,
    textAlign : "center",
    fontWeight : "500"
  }
});

export default Photo