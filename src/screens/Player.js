import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import data from '../data/data'
import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Player = ({ navigation }) => {
  const [count, setCount] = useState(0)
  const limit = data.length;
  return (
    <View className='w-full h-screen bg-[#E2FCFF]'>
      <View className='p-5 mt-10 flex flex-col items-center'>
        <Image source={data[count].posterUrl} className='rounded-xl' style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
        <Text className='text-3xl mt-4 text-black font-bold'>{data[count].title}</Text>
        <Text className='text-lg  text-black font-bold'>{data[count].singer}</Text>

        <View>
          <Slider minimumValue={0} maximumValue={1} style={{ width: 350, height: 1, marginTop: 50 }} />
          <View className='flex flex-row  p-5 justify-between'>
            <Text>0:00</Text>
            <Text>{data[count].duration}</Text>
          </View>
          <View className='flex flex-row justify-evenly'>
          <TouchableOpacity>
            <MaterialIcons name='skip-previous' size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='play-circle' size={50} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='skip-next' size={50} />
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  )
}

export default Player