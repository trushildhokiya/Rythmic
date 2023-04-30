import { View, Text, Image } from 'react-native'
import React from 'react'
import Headphones from '../../assets/headphones.png';
import { BarIndicator} from 'react-native-indicators';
const LoadUp = () => {
  return (
    <View className='items-center bg-[#AEDBF0] h-screen w-full'>
      <View className="mt-[130] mb-[50] p-[50]">
        <Text className="text-3xl font-bold text-[#3F7EB3]">Rhytmic</Text>
      </View>
      <View>
        <Image source={Headphones} className="w-[150] h-[150]" />
      </View>
      <View>
        <Text className="p-[20] text-sm text-black opacity-50">Listen to your favourite songs</Text>
      </View>
        <BarIndicator color='#3f7eb3' size={60}/>
 
    </View>
  )
}

export default LoadUp