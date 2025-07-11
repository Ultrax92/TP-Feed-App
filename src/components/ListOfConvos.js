import { Image, Pressable, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListOfConvos = ({ navigation }) => {
  const userList = [
    {
      id: 1,
      name: "Malena Tudi",
      url: require("../../assets/user.png"),
    },
    {
      id: 2,
      name: "Nymn",
      url: require("../../assets/user.png"),
    },
    {
      id: 3,
      name: "Pokimane",
      url: require("../../assets/user.png"),
    },
    {
      id: 4,
      name: "xQc",
      url: require("../../assets/user.png"),
    },
    {
      id: 5,
      name: "Shroud",
      url: require("../../assets/user.png"),
    },
  ];

  const conversationsList = [
    {
      id: 1,
      userId: 2,
      text: "Hey, how's it going?",
    },
    {
      id: 2,
      userId: 3,
      text: "Are you joining the stream later?",
    },
    {
      id: 3,
      userId: 4,
      text: "Bro that last game was insane!",
    },
    {
      id: 4,
      userId: 5,
      text: "Need help setting up my OBS again lol",
    },
    {
      id: 5,
      userId: 1,
      text: "Thanks for the raid yesterday ❤️",
    },
  ];

  const renderItem = ({ item }) => {
    const currentUser = userList.find((user) => user.id === item.userId);
    if (!currentUser) return null;

    return (
      <Pressable
        onPress={() =>
          navigation.navigate("Messages", {
            name: currentUser.name,
            avatar: currentUser.url,
          })
        }
        style={{
          height: 103,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: 33,
          marginBottom: 16,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <View
            style={{
              width: 67,
              height: 67,
              borderRadius: 35,
              borderColor: "#000000",
              borderWidth: 1,
              marginHorizontal: 17,
            }}
          >
            <Image
              style={{
                width: 61,
                height: 61,
                borderRadius: 30,
                marginTop: 2,
                marginLeft: 2,
              }}
              source={currentUser.url}
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 14, paddingBottom: 9 }}>
            {currentUser.name}
          </Text>
          <Text style={{ color: "#656565", width: "65%" }}>{item.text}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View
      style={{
        paddingTop: 30,
        marginTop: -30,
        marginBottom: 50,
      }}
    >
      <FlatList
        data={conversationsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={119}
        decelerationRate="fast"
        ListHeaderComponent={<View style={{ height: 30 }} />}
      />
    </View>
  );
};
