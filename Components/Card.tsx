import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/AppStyle'
import { Tdata } from '../data/data'
import { Colors } from '../Styles/Colors'
import { useNavigation } from '@react-navigation/native';

const Card = ({item} : {item : Tdata}) => {

  const navigation = useNavigation()

  const handlePress = ()=>{
    (navigation as any).navigate("Portofolio",item)
  }

  return (
    <Pressable
        onPress={()=>handlePress()}
        style={({pressed})=>[
            {backgroundColor : pressed ? Colors.pressed : Colors.white},
            globalStyles.card
        ]}>
        <Text style={globalStyles.titleText}>{item.name}</Text>
        <Image style={globalStyles.profileImg} source={{ uri : item.img}} />
        <View style={globalStyles.profileInfo}>
            <Text style={globalStyles.profileCountry}>{item.country}</Text>
            <Text>{item.totalImg}</Text>
        </View>
    </Pressable>
  )
}

export default Card