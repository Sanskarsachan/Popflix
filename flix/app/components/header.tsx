import { View, Image } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View className='pt-4 items-start'>
            <Image source={require('../../assets/images/Popflixlogo.png')} className='w-24 h-24 aspect-square align-middle' />
        </View>
    )
}