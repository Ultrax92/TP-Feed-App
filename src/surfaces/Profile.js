import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/colors";
import { AddedImages } from "../components/AddedImages";
import { FavoritedImages } from "../components/FavoritedImages";
import { ProfileStatistics } from "../components/ProfileStatistics";

export const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: colors.borderLightGreen,
            position: "absolute",
            top: -210,
            left: -120,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: colors.borderLightGreen,
            position: "absolute",
            top: -260,
            left: -120,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View
          style={{
            width: 650,
            height: 570,
            borderRadius: 155,
            borderWidth: 1,
            borderColor: colors.borderLightGreen,
            position: "absolute",
            top: -320,
            left: -120,
            transform: [{ rotate: "-45deg" }],
          }}
        />
        <View style={{ paddingTop: 50 }}>
          <View
            style={{
              width: 96,
              height: 96,
              borderRadius: 35,
              borderColor: colors.black,
              borderWidth: 1,
              transform: [{ rotate: "-45deg" }],
              alignSelf: "center",
            }}
          />
          <View
            style={{
              overflow: "hidden",
              alignSelf: "center",
              transform: [{ rotate: "-45deg" }],
              borderRadius: 35,
              width: 87,
              height: 87,
              marginTop: -92,
            }}
          >
            <Image
              style={{
                height: 105,
                width: 105,
                transform: [{ rotate: "45deg" }],
                alignSelf: "center",
              }}
              source={{
                uri: "https://randomuser.me/api/portraits/women/10.jpg",
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 26,
              alignSelf: "center",
              marginTop: 30,
            }}
          >
            John Doe
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 16,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            @johndoe
          </Text>
        </View>
        <ProfileStatistics />
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="image-outline" color={colors.black} size={30} />
            <AddedImages />
          </View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="bookmark-outline" color={colors.black} size={30} />
            <FavoritedImages />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
