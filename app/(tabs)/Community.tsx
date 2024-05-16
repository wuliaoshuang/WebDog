import { Ionicons } from '@expo/vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import MyIconBtn from '../../components/MyIconBtn'
import MyNavbar from '../../components/MyNavbar'

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                contentContainerStyle={{
                    gap: 10
                }}
                ListFooterComponent={
                    <View className="flex flex-row items-center justify-center gap-4 p-4 py-0 pb-[120px]">
                        <Text className="text-gray-500 text-[12px]">————  没有更多了  ————</Text>
                    </View>
                }
                className='flex flex-col py-[10px]'
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                renderItem={() => <CommunityItem />} ></FlatList>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}


const Community = () => {
    return (
        <View className='flex-1'>
            <MyNavbar title='社区'>
                <View className='flex-1 justify-end flex flex-row'>
                    <MyIconBtn />
                </View>
            </MyNavbar>
            <Tab.Navigator className='flex-1'>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="XXX" component={SettingsScreen} />
            </Tab.Navigator>
        </View>
    )
}

const CommunityItem = () => {
    return (
        <View className='flex flex-col w-full bg-white p-4' style={{ gap: 16 }}>
            <View className='flex flex-row justify-between'>
                <View className='flex flex-row items-center' style={{ gap: 16 }}>
                    <Image className='w-[56px] h-[56px] bg-[#bdbdbd] rounded-full' />
                    <View>
                        <Text className='text-[16px] font-medium text-[#3aaafd]'>UserName</Text>
                        <Text className='text-gray-400'>Time</Text>
                    </View>
                </View>
                <View>
                    <MyIconBtn icon={'ellipsis-vertical-sharp'} style={{
                        width: 45,
                        height: 45,
                    }} />
                </View>
            </View>
            <View>
                <Text className='text-[18px] font-semibold '>Title</Text>
                <Text className='text-[18px] font-normal'>
                    contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent
                </Text>
            </View>
            <Image className='w-full h-[200px] bg-[#bdbdbd] rounded-md' />
            <View className='flex flex-row' >
                <View style={{ gap: 8 }} className='flex items-center flex-row py-2 px-2 bg-blue-100 rounded-full'>
                    <Text className='w-[20px] h-[20px] text-center font-bold rounded-full text-[#fff] bg-[#3aaafd]'>#</Text>
                    <View className='flex flex-row items-center'>
                        <Text className="w-auto font-semibold mr-1">Tag</Text>
                        <Ionicons name='arrow-forward' size={16} />
                    </View>
                </View>
            </View>
            <View className='flex flex-row justify-around'>
                <View className='flex flex-row items-center'>
                    <Ionicons name='arrow-redo-outline' size={20} />
                    <Text>转发</Text>
                </View>
                <View className='flex flex-row items-center'>
                    <Ionicons name='chatbubble-outline' size={20} />
                    <Text>10</Text>
                </View>
                <View className='flex flex-row items-center'>
                    <Ionicons name='heart-outline' size={20} />
                    <Text>99</Text>
                </View>
            </View>
        </View>
    )
}

export default Community