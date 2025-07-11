import { useHeaderHeight } from "@react-navigation/elements";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/colors";
import { ListOfMessages } from "../components/ListOfMessages";

export const Messages = ({ route }) => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 100 }}>
      <>
        <View
          style={{
            position: "absolute",
            top: 40,
            left: "2%",
            backgroundColor: colors.lightCyan,
            width: "96%",
            height: 255,
            borderRadius: 34,
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: colors.white,
            position: "absolute",
            top: 250,
            left: -300,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: colors.white,
            position: "absolute",
            top: 190,
            left: -290,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 125,
            left: 70,
          }}
        >
          <View
            style={{
              width: 84,
              height: 84,
              borderRadius: 35,
              borderColor: colors.black,
              transform: [{ rotate: "-45deg" }],
              position: "absolute",
              top: -3,
              left: -3,
            }}
          />
          <Image
            style={{ height: 78, width: 78, borderRadius: 40 }}
            source={{ uri: route.params.avatar }}
          />
        </View>
        <ListOfMessages conversationId="2" />
      </>
    </SafeAreaView>
  );
};
