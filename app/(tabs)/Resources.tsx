import React from 'react'
import { Text, View } from 'react-native'
import MyIconBtn from '../../components/MyIconBtn'
import MyNavbar from '../../components/MyNavbar'
import { useBearStore } from '../../store/test'

const Resources = () => {
    const bears = useBearStore((state) => state?.bears)
    const increasePopulation = useBearStore((state) => state.increasePopulation)
    return (
        <View className='flex-1'>
            <MyNavbar title='资源'>
                <View className='flex-1 justify-end flex flex-row'>

                    <MyIconBtn icon={"cart"} style={{ marginRight: 16 }} />
                    <MyIconBtn />
                </View>
            </MyNavbar>
            <Text>{bears}</Text>
            <MyIconBtn onPress={increasePopulation} />
        </View>
    )
}

export default Resources