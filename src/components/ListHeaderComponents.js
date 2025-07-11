import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";
import { colors } from "../../styles/colors";

export const ListHeaderComponents = () => {
  return (
    <Pressable onPress={() => console.log("pressed the add button")}>
      <View
        style={{
          width: 56,
          height: 56,
          marginRight: 30,
        }}
      >
        <LinearGradient
          colors={[colors.lightPink, colors.lightCyan]}
          style={{
            borderRadius: 28,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="add" size={30} color={colors.black} />
        </LinearGradient>
      </View>
    </Pressable>
  );
};
