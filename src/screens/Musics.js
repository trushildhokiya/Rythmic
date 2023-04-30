import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import data from '../data/data';
import { FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Audio } from 'expo-av';

const Musics = ({ navigation }) => {
  return (
    <View className='w-full h-screen pt-[50] bg-[#E2FCFF] '>
      <FlatList data={data} className='mb-[100]'
        renderItem={({ item }) => {
          return (
            <View className='flex flex-col items-center'>
              <View className='flex p-5 flex-row justify-between bg-[#FAFEFF] my-2 w-[350] items-center rounded-full'>
                <Image source={item.posterUrl} style={{ width: 50, height: undefined, aspectRatio: 1 }} className='rounded-full' />
                <View className='flex flex-col'>
                  <Text className=' font-bold text-lg text-[#3F7EB3] '>{item.title}</Text>
                  <Text className='text-sm font-semibold text-[#6BA7CC]'> {item.singer}</Text>
                </View>
                <View className='flex flex-row items-center'>
                  <Text className='px-5'>{item.duration}</Text>
                  <TouchableOpacity onPress={async () => {
                    // logics to be implemeted 
                  }}>
                    <MaterialCommunityIcons name='play-circle-outline' size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }}
      />
      <Footer navigation={navigation} />
    </View>
  )
}

export default Musics