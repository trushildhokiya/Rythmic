import { StatusBar } from 'expo-status-bar';
import { useEffect , useState } from 'react';
import {  Text, View } from 'react-native';
import LoadUp from './src/screens/LoadUp';

export default function App() {

  const [load,setLoad] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false);
    },5000)
  },[]);

  return (
    <View className="" >
      {load ? <LoadUp/>: <Text>Bye</Text>}
    </View>
  );
}

