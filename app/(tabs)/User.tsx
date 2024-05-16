import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import MyIconBtn from '../../components/MyIconBtn'
import MyNavbar from '../../components/MyNavbar'

const User = () => {
    return (
        <View>
            <MyNavbar title='我的'>
                <View className='flex-1 justify-end flex flex-row'>
                    <MyIconBtn
                        icon={"settings"}
                        onPress={() => router.push('/settings')} />
                </View>
            </MyNavbar>
        </View>
    )
}

export default User