import { View, Text } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'

const Player = ({navigation}) => {
  return (
    <View className='w-full h-screen bg-[#E2FCFF]'>
      <Text style={{color:'red' ,fontSize:30}}>Player</Text>
      <Footer navigation={navigation} />
    </View>
  )
}

export default Player