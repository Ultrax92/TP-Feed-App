import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../styles/colors";
import { Conversations } from "./Conversations";
import { Messages } from "./Messages";

const Stack = createStackNavigator();

export const ConversationsNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.black,
        headerTransparent: true,
        headerTitleAlign: "left",
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
      }}
    >
      <Stack.Screen name="Conversations" component={Conversations} />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            position: "absolute",
            top: 100,
            left: 120,
          },
        })}
      />
    </Stack.Navigator>
  );
};
