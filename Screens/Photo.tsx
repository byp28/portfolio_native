import { View, Text, Button, ScrollView, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../Styles/AppStyle'

const Photo = ({navigation, route}: {navigation : any, route : any}) => {

  const {name, img, title, url, photoDesc , favColor} = route.params

  return (
    <ScrollView>
      <Image source={{uri : url }} style={globalStyles.ImgSelect} />
      <View style={{gap : 12, paddingHorizontal : 25, paddingVertical : 8}}>
        <Text style={{fontSize : 20}}>Lien</Text>
        <Text style={{textAlign : "justify", fontSize : 16}}>{photoDesc}</Text>
      </View>
    </ScrollView>
  )
}



export default Photo