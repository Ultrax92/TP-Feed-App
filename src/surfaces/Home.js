import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { colors } from "../../styles/colors";
import { AddPost } from "./AddPost";
import { Favorites } from "./Favorites";
import { Feed } from "./Feed";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();
const ConversationsBase = () => <View style={{ flex: 1 }} />;

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Conversations") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentStroke,
        tabBarInactiveTintColor: colors.black,
        tabBarShowLabel: true,
        headerTransparent: true,
        headerTitleAlign: "left",
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
      })}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen
        name="ConversationsMain"
        component={ConversationsBase}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name="chatbox-outline" color="#000000" size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("ConversationsNav");
          },
        })}
      />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
