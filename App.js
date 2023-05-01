import { useEffect, useState } from 'react';
import LoadUp from './src/screens/LoadUp';
import Musics from './src/screens/Musics';
import Player from './src/screens/Player';
import About from './src/screens/About';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  
  const [load,setLoad]  =  useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false)
    },3000)
  },[])

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    {load? <LoadUp/> : null}
      <Stack.Navigator initialRouteName='player'>
        <Stack.Screen name='playlist' component={Musics} options={{headerShown:false, animation:'fade'}}/>
        <Stack.Screen name='player' component={Player} options={{headerShown:false, animation:'fade'}}/>
        <Stack.Screen name='about' component={About} options={{headerShown:false,  animation:'fade'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

