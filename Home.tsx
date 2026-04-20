import { View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native'
import {DATA, Tdata} from "./data/data"
import {globalStyles} from "./Styles/AppStyle"
import React from 'react'

import Card from './Components/Card'

const Home = ({navigation}: {navigation : any}) => {

    const data = DATA

    const renderProfile = ({item} : {item : Tdata})=>{
        const navTo = ()=>{
            navigation.navigate("Portofolio",item)
        }
        return (
            <Card item={item} handlePress={navTo} />
        )
    }

    return (
        <View style={globalStyles.container}>
        <FlatList
            data={data}
            renderItem={renderProfile}
            keyExtractor={(item)=> item.id}
        />
        </View>
    )
}



export default Home