import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Footer = ({navigation}) => {
  return (
    <View className='absolute bottom-0 p-5 bg-[#6BA7CC] w-full rounded-t-[30]'>
      <View className='flex flex-row flex-1 justify-around items-center'>
        <TouchableOpacity
        onPress={()=>navigation.navigate('playlist')}
        >
          <Fontisto name='play-list' size={30} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('player')}
        >
          <IonIcons name='musical-notes' size={35} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('about')}
        >
          <IonIcons name='ios-person-circle-sharp' size={35} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer