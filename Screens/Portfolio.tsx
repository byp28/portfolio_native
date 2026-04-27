import { View,ScrollView, Text, Button, StyleSheet, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { globalStyles } from '../Styles/AppStyle'
import TouchableImg from '../Components/TouchableImg'
import { TPhoto } from '../data/data'

const Portofolio = ({route,navigation}: {navigation : any, route : any}) => {

  const {name,country,photos,desc,img,favColor} = route.params
  
  const selectPhoto = (photo : TPhoto)=>{
    const {title, url, photoDesc} = photo
    navigation.navigate("Photo",{name, img, title, url, photoDesc , favColor})
  }
  useEffect(()=>{
    console.log(photos)
  },[])
  return (
    <ScrollView>
      <View style={{backgroundColor : favColor ,...Styles.profileImg }}>
        <Image style={Styles.pImg} source={{uri : img}}/>
        <Text style={Styles.name}>{name}</Text>
      </View>
      <View style={Styles.bio}>
        <Text style={Styles.bioTitle}>Bio</Text>
        <Text style={Styles.text}>{desc}</Text>
      </View>
      <View>
        <Image source={{uri : img}}/>
        {
          (photos as TPhoto[]).map((photo, i)=>(
            <TouchableImg key={i} photo={photo} selectPhoto={()=> selectPhoto(photo)} />
          ))
        }
      </View>
    </ScrollView>
    
  )
}

const Styles = StyleSheet.create({
  profileImg : {
    alignItems : "center",
    flex : 1,
    paddingVertical : 20
  },
  pImg : {
    width : 150,
    height : 150,
    borderRadius : 100,
    borderColor : "white",
    borderWidth : 2
  },
  name : {
    fontSize : 26,
    color : "#fff",
    marginVertical : 14
  },
  bio : {
    padding : 25,
    gap : 18
  },
  bioTitle : {
    fontSize : 24,
    fontWeight : "600"
  },
  text : {
    textAlign : "justify",
    fontSize : 17
  }
})

export default Portofolio