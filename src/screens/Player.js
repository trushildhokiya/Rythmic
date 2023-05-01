import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import data from '../data/data'
import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Audio } from 'expo-av';

const Player = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [playing, setPlaying] = useState(false);
  const limit = data.length;

  const sound = React.useRef(new Audio.Sound());

  const handlePlayPause = async () => {
    if (playing == false) {
      setPlaying(!playing);
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded == false) {
        await sound.current.loadAsync(data[count].musicUrl)
      }
      sound.current.playAsync()
    }
    else {
      setPlaying(!playing)
      sound.current.pauseAsync()
    }
  }

  async function handlePrevious() {
    if (count != 0) {
      setCount(count - 1)
      setPlaying(false)
      await sound.current.unloadAsync()
    }
  }

  async function handleNext() {
    if (count != limit - 1) {
      setCount(count + 1)
      setPlaying(false)
      await sound.current.unloadAsync()
    }
  }

  return (
    <View className='w-full h-screen bg-[#E2FCFF]'>
      <View className='p-5 mt-10 flex flex-col items-center'>
        <Image source={data[count].posterUrl} className='rounded-xl' style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
        <Text className='text-3xl mt-4 text-black font-bold'>{data[count].title}</Text>
        <Text className='text-lg  text-black font-bold'>{data[count].singer}</Text>
        <Text>{count}</Text>
        <View>
          <Slider minimumValue={0} maximumValue={1} style={{ width: 350, height: 50, }} />
          <View className='flex flex-row -mt-6 p-5 justify-between'>
            <Text>0:00</Text>
            <Text>{data[count].duration}</Text>
          </View>
          <View className='flex flex-row justify-evenly'>
            <TouchableOpacity onPress={handlePrevious}>
              <MaterialIcons name='skip-previous' size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPause}>
              <MaterialIcons name={playing ? 'pause-circle' : 'play-circle'} size={50} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
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