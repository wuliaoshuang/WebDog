import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const _layout = () => {
    return (
        <View className='flex-1 p-[10px]' style={{ gap: 10 }}>
            <SettingGorup />
            <SettingGorup />
        </View>
    )
}

const SettingGorup = () => {
    return (
        <View className='w-full flex flex-col' >
            <Text className='ml-[10px] mb-[10px] text-gray-600'>Setting Group</Text>
            <View className='w-full flex flex-col bg-white rounded-xl overflow-hidden'>
                <SettingItem icon={'add'} title='ADD' />
                <SettingItem icon={'close'} title='CLOSE' />
                <SettingItem icon={'settings'} title='SETTIGS' />
            </View>
        </View>
    )
}

interface ItemPoprs {
    icon: any;
    title: string;
    subTitle?: string;
    type?: string;
}

const SettingItem = ({
    icon,
    title,
    subTitle,
    type
}: ItemPoprs) => {
    return (
        <View className='w-full flex flex-row items-center justify-between p-4 border-b border-gray-200'>
            <View className='flex flex-row items-center' style={{ gap: 16 }}>
                <Ionicons name={icon} size={20} color='black' />
                <Text>{title}</Text>
            </View>
            <View className='flex flex-row items-center'>
                <Text>{subTitle}</Text>
                <Ionicons name='chevron-forward' size={20} color='gray' />
            </View>
        </View>
    )
}

export default _layout