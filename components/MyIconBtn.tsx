import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View, ViewStyle } from 'react-native'

interface MyIconBtnProps {
    bgcolor?: string,
    color?: string,
    icon?: any,
    onPress?: () => void,
    style?: ViewStyle,
}

const MyIconBtn = ({
    bgcolor = 'rgb(243, 244, 246)',
    color = "gray",
    onPress = () => { },
    icon = "search",
    style = {}
}: MyIconBtnProps) => {
    return (
        <View
            style={{ backgroundColor: bgcolor, ...style }}
            className={'w-[56px] bg-gray-100 h-[56px] rounded-full'}>
            <Pressable
                className='flex justify-center items-center w-full h-full'
                android_ripple={{ color: 'gray', borderless: true }}
                onPress={onPress}>
                <Ionicons name={icon} size={24} color={color} />
            </Pressable>
        </View>
    )
}

export default MyIconBtn