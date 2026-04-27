import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import { globalStyles } from '../Styles/AppStyle'
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const HeaderLeft = ({img} : {img:string}) => {
    const navigation = useNavigation()
  return (
    <View style={globalStyles.headerL}>
        <Pressable onPress={()=> navigation.goBack()} >
            <SimpleLineIcons name="arrow-left" size={24} color="white" /> 
        </Pressable>
      <Image style={globalStyles.pImg} source={{ uri : img }} />
    </View>
  )
}

export default HeaderLeft