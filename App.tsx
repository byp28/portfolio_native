
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Portofolio from './Screens/Portfolio';
import Photo from './Screens/Photo';
import { Colors } from './Styles/Colors';


const Stack = createNativeStackNavigator()



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle : {
              backgroundColor : "#010101"
            },
            headerTintColor : Colors.white
        }}
      >
        <Stack.Screen name='Home' component={Home}
        options={{
          title : "Accueil",
        }}
        />

        <Stack.Screen name='Portofolio' component={Portofolio} 
          options={({route})=>{
            return {
              title : (route.params as { name?: string })?.name || ''
            }
          }}
        />
        <Stack.Screen name='Photo' component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
