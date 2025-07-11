import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

export const ListOfMessages = () => {
  const messages = {
    id: 2,
    messages: [
      {
        id: 1,
        type: "to",
        text: "Weel, let me start by saying, for those of you who might be confused, I am not Ben Johnson. On the train ride from DC this morning, we passed through Baltimore",
      },
      {
        id: 2,
        type: "from",
        text: "After the 2000 census, Representative Davis maveuvered to have his Congressional District gerrymandered to include as many Republicans as possible",
      },
      {
        id: 3,
        type: "from",
        text: "Genetically advanced agriculture, anti-aging technology, and other advancements we've yet to see today will likely push our longevity even farther",
      },
      {
        id: 4,
        type: "to",
        text: "It shouldn't be surprising, then, that many of the biggets proponents of banning performance enhancing drugs in sports are also suspect of some The Rosenkranz Foundation",
      },
    ],
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.text,
          item.type === "from" ? styles.textFrom : styles.textTo,
        ]}
      >
        <Text style={{}}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={messages.messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.lightGray,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    fontSize: 14,
    padding: 10,
    maxWidth: "65%",
    marginVertical: 14,
  },
  textFrom: {
    borderTopLeftRadius: 20,
    alignSelf: "flex-end",
    backgroundColor: colors.lightGreen,
  },
  textTo: {
    borderTopRightRadius: 20,
    alignSelf: "flex-start",
    backgroundColor: colors.white,
  },
});
