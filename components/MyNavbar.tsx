import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'

const MyNavbar = ({ title, children, bottomChildren }: { title: string, children?: ReactNode, bottomChildren?: ReactNode }) => {
    return (
        <View className='w-full flex flex-col bg-white p-[16px] shadow-md shadow-gray-500'>
            <View className='w-full flex flex-row items-center'>
                <Text className='text-[24px] font-bold'>
                    {title}
                </Text>
                {children}
            </View>
            {bottomChildren}
        </View>
    )
}

export default MyNavbar