// MyAlert.tsx
import { useEffect, useRef } from 'react';
import { BackHandler, Pressable, Text, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { eventEmitter } from './eventEmitter';


interface RBSheetRef {
    open: () => void;
    close: () => void;
}

const MyAlert = () => {
    const refMessage = useRef<RBSheetRef>();

    useEffect(() => {
        const openListener = () => {
            refMessage.current?.open();
        };
        const closeListener = () => {
            refMessage.current?.close();
        };

        eventEmitter.on('openAlert', openListener);
        eventEmitter.on('closeAlert', closeListener);

        return () => {
            eventEmitter.off('openAlert', openListener);
            eventEmitter.off('closeAlert', closeListener);
        };
    }, []);

    return (
        <RBSheet
            ref={refMessage as React.LegacyRef<RBSheetRef> | undefined}
            openDuration={150}
            closeDuration={100}
            customModalProps={{
                animationType: 'fade'
            }}
            customStyles={{
                wrapper: { backgroundColor: 'rgba(0,0,0,0.5)' },
                container: {
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                },
            }}
        >
            <View className='p-[27px] h-full absolute top-0 right-0'>
                <Text className='font-bold text-[23px]'>提示</Text>
                <Text className='py-8 text-[16px]'>
                    你确定要退出应用吗？？
                </Text>
                <View className='flex justify-end items-end flex-1 flex-row w-full shrink-0'>
                    <Pressable
                        className='bg-[#3aaafd] px-8 py-3 mr-4 rounded-full'
                        onPress={() => {
                            refMessage.current?.close()
                            BackHandler.exitApp()
                        }}>
                        <Text className='text-[16px] uppercase text-white font-bold'>退出</Text>
                    </Pressable>

                    <Pressable
                        className='bg-gray-200 px-8 py-3 rounded-full'
                        onPress={() => refMessage.current?.close()}>
                        <Text className='text-[16px] uppercase text-black font-bold'>取消</Text>
                    </Pressable>
                </View>
            </View>
        </RBSheet>
    );
};

export default MyAlert