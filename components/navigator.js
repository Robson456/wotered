import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home.js';
import Details from '../screens/details.js';
import NewPlant from '../screens/NewPlant.js';


const Stack = createNativeStackNavigator();

export default function Naviagtor() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="NewPlant" component={NewPlant}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}