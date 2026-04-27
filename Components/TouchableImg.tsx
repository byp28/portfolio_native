import { View, Text, Pressable, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { TPhoto } from '../data/data'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../Styles/AppStyle'

export default function TouchableImg({photo, selectPhoto}: {photo : TPhoto, selectPhoto: ()=>void}) {
  

  return (
    <View style={globalStyles.TouchableContainer}>
        <TouchableOpacity  onPress={()=> selectPhoto()}>
          <ImageBackground style={globalStyles.TouchablePhoto} source={{uri : photo.url}}>
            <View style={globalStyles.TouchableView}>
              <Text style={globalStyles.TouchableText}>{photo.title}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
    </View>
   
  )
}
