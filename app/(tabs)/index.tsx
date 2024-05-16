import React, { useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import MyIconBtn from "../../components/MyIconBtn";
import MyNavbar from "../../components/MyNavbar";
import ProjectItem from "../../components/ProjectItem";


export interface Project {
  title: string
  content: string
  package: string
  status: number
  key: number
}

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function TabOneScreen() {

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(3000).then(() => setRefreshing(false));
  }, []);

  // useEffect(() => {
  //   const backAction = () => {
  //     eventEmitter.emit('openAlert');
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  const [isArrange, setIsArrange] = useState<boolean>(true)
  return (
    <View className='flex-1'>
      <MyNavbar title="首页">
        <View className="flex-1 flex flex-row justify-end">
          <MyIconBtn style={{ marginRight: 16 }} />
          {
            isArrange ?
              <MyIconBtn icon={'list'} onPress={() => setIsArrange(false)} />
              :
              <MyIconBtn icon={'grid'} onPress={() => setIsArrange(true)} />
          }
        </View>
      </MyNavbar>

      <FlatList
        className="flex-col p-[5px] pt-[10px]"
        numColumns={isArrange ? 1 : 2}
        key={isArrange ? "1" : "2"}
        data={[{
          title: "Private Project",
          content: "这是一个私有项目",
          package: "com.xxx.xxxx",
          status: 1,
          key: 0
        },
        {
          title: "Public Project",
          content: "这是一个公开项目",
          package: "com.xxx.xxxx",
          status: 0,
          key: 1
        },
        {
          title: "Private Project",
          content: "这是一个私有项目",
          package: "com.xxx.xxxx",
          status: 1,
          key: 2
        }
        ]}
        renderItem={({ item }: { item: Project }) =>
          <ProjectItem item={item} isArrange={isArrange as boolean} />}

        refreshControl={
          <RefreshControl colors={[
            "#3aaafd",
            "#fd783a",
            "#fd3a61"
          ]} refreshing={refreshing} onRefresh={onRefresh} />
        }

        ListFooterComponent={
          <View className="flex flex-row items-center justify-center gap-4 p-4 py-0 pb-[120px]">
            <Text className="text-gray-500 text-[12px]">————  没有更多了  ————</Text>
          </View>
        }

        contentContainerStyle={{
          gap: 10,
        }}
      ></FlatList>

    </View>
  );
}
