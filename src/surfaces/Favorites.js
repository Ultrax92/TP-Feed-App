import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

export const Favorites = () => {
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
            <View>
                <Text style={{ fontFamily: "Poppins_400Regular" }}>this will be the favorites screen</Text>
            </View>
        </SafeAreaView>
    );
};