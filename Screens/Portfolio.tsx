import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { globalStyles } from '../Styles/AppStyle'

const Portofolio = ({navigation, route}: {navigation : any, route : any}) => {

  const {name,country,totalImg} = route.params
 

  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  )
}


export default Portofolio