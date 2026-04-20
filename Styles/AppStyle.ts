import {  StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#fff",
    alignContent : "center",
    justifyContent : "center",
    paddingVertical : 20,
  },
  text : {
    fontSize : 22,
    textAlign : "center",
    fontWeight : "500"
  },
  card : {
    padding : 10,
    alignItems : "center",
  },
  titleText : {
    fontSize : 24,
    padding : 12
  },
  profileImg : {
    width : 350,
    height : 350,
    borderRadius : 14
  },
  profileInfo : {
    width: "100%",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "space-between",
    padding : 30
  },
  profileCountry : {
    paddingVertical : 4,
    paddingHorizontal : 8,
    backgroundColor : "#d8d8d8",
    borderRadius : 5
  }
});