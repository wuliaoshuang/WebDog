import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

interface MyTabsProps extends BottomTabBarProps {
    onPressf?: () => void,
}

const MyTabs = ({ state, descriptors, navigation, onPressf }: MyTabsProps) => {
    useEffect(() => {
        console.log(descriptors.length)
    }, [descriptors])
    return (
        <View
            className='
            flex flex-row justify-evenly 
            bg-white shadow-md shadow-[#bdbdbd]
            absolute bottom-[21px] left-[5%] 
            w-[90%] rounded-full p-[16px]
            '>
            {
                state.routes.map((route, index) => {

                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        label !== 'float' ? <View className='w-[45px] h-[45px]' key={index}>
                            <Pressable
                                onPress={onPress}
                                className='w-full h-full flex justify-center items-center '>
                                {options.tabBarIcon && options.tabBarIcon({
                                    color: '#3aaafd',
                                    focused: isFocused,
                                    size: 0
                                })}
                                <Text
                                    style={{ color: isFocused ? '#3aaafd' : '#313131' }}
                                    className='font-bold mt-1 text-[10px]'>
                                    {label as string}
                                </Text>
                            </Pressable>
                        </View>
                            :
                            <View
                                className={`
                            w-[45px] h-[45px] bg-[#3aaafd]
                            shadow-md shadow-[#3aaafd]
                            rounded-full
                            `}
                                key={index}
                            >
                                < Pressable
                                    onPress={onPressf}
                                    className='w-full h-full flex justify-center items-center '
                                    android_ripple={{ color: 'white', borderless: true }}>
                                    <Ionicons style={{
                                        transform: [{ rotate: '45deg' }]
                                    }} name='close' size={24} color='white' />
                                </Pressable>
                            </View >
                    )
                })
            }

        </View>
    )
}

export default MyTabs