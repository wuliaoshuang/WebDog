import { Ionicons } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"
import Animated, { LightSpeedInLeft, LightSpeedOutLeft } from "react-native-reanimated"
import { Project } from "../app/\(tabs\)"

const ProjectItem = ({ item, isArrange }: { item: Project, isArrange: boolean }) => {

    return <View key={item.key} style={{ width: isArrange ? "100%" : "50%" }} className="p-[5px] py-0">
        <Animated.View
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutLeft}
            className="bg-white w-full p-[16px] rounded-xl flex flex-row overflow-hidden"
            style={{ flexDirection: isArrange ? 'row' : 'column' }}>
            <View
                className="absolute z-10 w-[45px] h-[45px] bg-[#3fcf32] rounded-br-full flex justify-center pl-2 pb-2"
                style={{ backgroundColor: item.status === 1 ? "#3aaafd" : "#3fcf32" }}>
                <Ionicons name={item.status === 1 ? "lock-closed" : 'lock-open'} size={18} color="white" />
            </View>
            <Image
                style={{ width: isArrange ? 90 : "100%", height: isArrange ? 90 : 135 }}
                className="bg-[#eee] h-[90px] rounded-lg" />
            <View style={{ marginLeft: isArrange ? 16 : 0, marginTop: isArrange ? 0 : 8, gap: isArrange ? 0 : 4 }} className="flex-1 flex flex-col justify-around">
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    className="text-[18px] font-bold">{item.title}</Text>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    className="text-gray-500"
                >{item.content}</Text>
                <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    className="text-gray-400">{item.package}</Text>
            </View>
        </Animated.View>
    </View>
}

export default ProjectItem