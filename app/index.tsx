import React, { useRef } from 'react'
import { View, Text, StatusBar } from 'react-native'
import LottieView from 'lottie-react-native';

const Index = () => {
    const animation = useRef(null);
    return (
        <View
            style={{ paddingTop: 10 }}
            className='flex-1 flex justify-center items-center bg-[#3aaafd]'>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#3aaafd',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/animation/DogAnimation.json')}
            />
            <Text className='text-white text-[16px] font-bold'>Loadding...</Text>
        </View>
    )
}

export default Index