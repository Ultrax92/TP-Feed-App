import { Image, View, useWindowDimensions } from "react-native";
import { colors } from "../../styles/colors";

const arrayOfImages = [
  {
    id: 1,
    source: require("../../assets/profile/3.jpg"),
  },
  {
    id: 2,
    source: require("../../assets/profile/1.jpg"),
  },
  {
    id: 3,
    source: require("../../assets/profile/2.jpg"),
  },
];

export const FavoritedImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;

  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      {arrayOfImages.map((item) => (
        <Image
          key={item.id}
          style={{
            width: imageWidth,
            height: 130,
            borderRadius: 20,
            marginBottom: 32,
            borderColor: colors.black,
            borderWidth: 1,
          }}
          source={item.source}
        />
      ))}
    </View>
  );
};
