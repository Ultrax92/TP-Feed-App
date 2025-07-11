import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListOfConvos } from "../components/ListOfConvos";

export const Conversations = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [text, onChangeText] = React.useState();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight - 30 }}>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: 210,
          left: -160,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View style={{ marginHorizontal: 30, position: "relative" }}>
        <View>
          <TextInput
            style={{
              fontSize: 14,
              paddingVertical: 12,
              paddingLeft: 40,
              marginHorizontal: 17,
              borderRadius: 15,
              backgroundColor: "#FFFFFF",
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowOpacity: 9,
            }}
            onChangeText={onChangeText}
            value={text}
            placeHolder="Search contacts"
          />
          <Ionicons
            name="search"
            size={24}
            color="#000000"
            style={{ position: "absolute", left: 28, top: 6 }}
          />
        </View>
        <ListOfConvos navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
