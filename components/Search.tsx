import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const Search = ({ deploy = true }: { deploy?: boolean }) => {
    return (
        <>
            {
                deploy ?
                    <View className='bg-gray-100 h-[56px] items-center px-[21px] flex flex-row flex-1 rounded-full ml-[16px]'>
                        <Ionicons name='search' size={24} color='gray' />
                        <Text className='text-[18px] text-gray-500 ml-4'>搜索本地项目</Text>
                    </View>
                    :
                    <View className='bg-gray-100 w-[56px] h-[56px] flex justify-center items-center rounded-full'>
                        <Ionicons name='search' size={24} color='gray' />
                    </View>
            }
        </>
    )
}

export default Search