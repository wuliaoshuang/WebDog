import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link } from 'expo-router';
import React, { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabOneScreen from '.';
import MyTabs from '../../components/MyTabs';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { useColorScheme } from '../../components/useColorScheme';
import Colors from '../../constants/Colors';
import Community from './Community';
import Resources from './Resources';
import User from './User';
import TabTwoScreen from './two';


interface RBSheetRef {
  /**
   * The method to open bottom sheet.
   */
  open: () => void;

  /**
   * The method to close bottom sheet.
   */
  close: () => void;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


const entering = () => {
  'worklet';
  const animations = {
    backgroundColor: withTiming('#fd3a61', { duration: 300 }),
    transform: [
      { rotate: withDelay(100, withTiming('90deg', { duration: 300 })) },
    ],
  };
  const initialValues = {
    backgroundColor: '#3aaafd',
    transform: [{ rotate: '45deg' }],
  };
  return {
    initialValues,
    animations,
  };
};

const entering2 = () => {
  'worklet';
  const animations = {
    opacity: withTiming(1, { duration: 300 }),
    transform: [
      { translateY: withTiming(0, { duration: 300 }) },
      { scale: withTiming(1, { duration: 300 }) },
    ],
  };
  const initialValues = {
    opacity: 0,
    transform: [
      { translateY: 100 },
      { scale: 0 },
    ],
  };
  return {
    initialValues,
    animations,
  };
};


// translate3d(26px, -198px, 0px)

export default function TabLayout() {

  const colorScheme = useColorScheme();
  const Tabs = createBottomTabNavigator();

  const refRBSheet = useRef<RBSheetRef>();
  const offset = useSharedValue<number>(0);
  const offset2 = useSharedValue<number>(0);
  const offset3 = useSharedValue<number>(1);
  const offset4 = useSharedValue<number>(1);


  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${offset.value}deg` }],
  }));

  const animatedStyles2 = useAnimatedStyle(() => ({
    opacity: offset3.value,
    transform: [
      { translateY: offset2.value },
      { scale: offset4.value },
    ],
  }));

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} className='flex-1 bg-white'>
        <Tabs.Navigator
          tabBar={(props) => <MyTabs {...props} onPressf={() => {
            refRBSheet.current?.open()
            offset.value = 90
            offset2.value = 0
            offset3.value = 1
            offset4.value = 1
          }} />}
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, true),
          }}>

          <Tabs.Screen
            name="index"
            component={TabOneScreen}
            options={{
              title: '首页',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => <Ionicons name='home' size={24} color={focused ? color : "#313131"} />,
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="info-circle"
                        size={25}
                        color={Colors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
            }}
          />
          <Tabs.Screen
            name="community"
            component={Community}
            options={{
              title: '社区',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => <Ionicons name='chatbubbles' size={24} color={focused ? color : "#313131"} />,
            }}
          />
          <Tabs.Screen
            name="float"
            component={TabTwoScreen}
          />
          <Tabs.Screen
            name="resources"
            component={Resources}
            options={{
              title: '资源',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => <Ionicons name='extension-puzzle' size={24} color={focused ? color : "#313131"} />,
            }}
          />
          <Tabs.Screen
            name="user"
            component={User}
            options={{
              title: '我的',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => <Ionicons name='person' size={24} color={focused ? color : "#313131"} />,
            }}
          />
        </Tabs.Navigator>
      </SafeAreaView>

      <RBSheet
        ref={refRBSheet as React.LegacyRef<RBSheetRef> | undefined}
        dragOnContent
        customModalProps={{
          animationType: 'fade',
        }}
        customStyles={{
          wrapper: {
            backgroundColor: "#ffffff"
          },
          container: {
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          },
          draggableIcon: {
            width: 80,
          },
        }}
      >
        <View className='flex-1'>
          <View className='w-full flex flex-row justify-between px-[16px] py-[120px]'>

            {
              [{
                name: "项目",
                icon: "code-slash",
                color: "#3aaafd",
              }, {
                name: "帖子",
                icon: "chatbubbles",
                color: "#fd953a",
              }, {
                name: "资源",
                icon: "extension-puzzle",
                color: "#3fcf32",
              }].map((item, index) =>
                <Animated.View
                  entering={entering2 as any}
                  style={[
                    animatedStyles2,
                    { transformOrigin: 'center' }
                  ]}
                  key={index} className='flex justify-center items-center'>
                  <View
                    className='w-[80px] h-[80px] bg-[#f1f1f1] rounded-full flex justify-center items-center'>
                    <Ionicons name={item.icon} size={32} color={item.color} />
                  </View>
                  <Text className='mt-4 text-[16px]'>{item.name}</Text>
                </Animated.View>)
            }

          </View>

          <Animated.View
            entering={entering}
            style={[animatedStyles]}
            className={`
            w-[45px] h-[45px] bg-[#fd3a61]
            shadow-md shadow-[#fd3a61]
            absolute bottom-[37.5px] left-[43.9%]
            rounded-full`}
          >
            < Pressable
              onPress={() => {
                // refRBSheet.current?.close()
                offset.value = withRepeat(
                  withSequence(
                    withTiming(45, { duration: 330 }),
                  ),
                  -1,
                  true
                );

                const pubani = withRepeat(
                  withSequence(
                    withTiming(0, { duration: 200 }),
                  ),
                  -1,
                  true
                );

                offset2.value = withRepeat(
                  withSequence(
                    withTiming(100, { duration: 200 }),
                  ),
                  -1,
                  true
                );

                offset3.value = pubani
                offset4.value = pubani

                let bb = setTimeout(() => {
                  refRBSheet.current?.close()
                  // offset2.value = 0
                  clearTimeout(bb)

                }, 100)
              }}
              className='w-full h-full flex justify-center items-center '
              android_ripple={{ color: 'white', borderless: true }}>
              <Ionicons name='close' size={24} color='white' />
            </Pressable>
          </Animated.View >
        </View>
      </RBSheet>
    </SafeAreaProvider>
  );
}
