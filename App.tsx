
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Button, Image, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Portofolio from './Screens/Portfolio';
import Photo from './Screens/Photo';
import { Colors } from './Styles/Colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HeaderLeft from './Components/HeaderLeft';
import FAQ from './Screens/FAQ';
import Settings from './Screens/Selected';
import Selected from './Screens/Selected';



const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

const Tabs  = createBottomTabNavigator()


function MyDrawer(){
  return(
    <Drawer.Navigator
      screenOptions={{
          headerStyle : {
              backgroundColor : "#010101"
            },
            headerTintColor : Colors.white
        }}
    >
      <Drawer.Screen name='Accueil' component={Home} />
      <Drawer.Screen name='FAQ' component={FAQ} />
    </Drawer.Navigator>
  )
}

function SelectedStack(){
  return(
    <Stack.Navigator >
      <Stack.Screen name='selected' component={Selected} options={{
          headerShown  : false
        }} />
      <Stack.Screen name='photo' component={Photo} />
    </Stack.Navigator>
  )
}

function MyStack(){
  return(
      <Stack.Navigator
          screenOptions={{
            headerStyle : {
                backgroundColor : "#010101"
              },
              headerTintColor : Colors.white
          }}>
        <Stack.Screen name='Drawer' component={MyDrawer}
        options={{
          headerShown : false
        }}
        />

        <Stack.Screen name='Portofolio' component={Portofolio} 
          options={({route})=>{
            return {
              title : (route.params as { name?: string })?.name || '',
              headerStyle : {
                backgroundColor : (route.params as { favColor?: string })?.favColor || '#000'
              },
              headerRight : ()=> <Button title='Edit' onPress={()=> Alert.alert("click")}  />,
              headerLeft : ()=>  <HeaderLeft img={(route.params as { img?: string })?.img || ''} />,
            }
          }}
        />
        <Stack.Screen 
          name='Photo' component={Photo}
          options={({route})=>{
              return {
                title : (route.params as { title?: string })?.title || '',
                headerStyle : {
                  backgroundColor : (route.params as { favColor?: string })?.favColor || '#000'
                },
                headerLeft : ()=>  <HeaderLeft img={(route.params as { img?: string })?.img || ''} />,
              }
            }}
            />
      </Stack.Navigator>
  )
}


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tabs.Navigator
       screenOptions={{
            headerStyle : {
                backgroundColor : "#010101"
              },
              headerTintColor : Colors.white
          }}>
        <Tabs.Screen  name='Membre' component={MyStack} 
        options={{
          headerShown : false
        }}/>
        <Tabs.Screen  name='Likes' component={SelectedStack} 
        options={{
          title:"Favoris"
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
