import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ListOfCards = () => {
    const renderItem = ({ item }) => {
        return (
            <Image
                style={{
                    width: "100%",
                    height: 288,
                    borderRadius: 20,
                    marginBottom: 32,
                }}
                source={{
                    uri: item.url,
                }}
            />
        );
    };

    const arrayOfImages = [
        {
            "itemId": 101,
            "authorId": 11,
            "timeStamp": "2 hrs ago",
            "url": "https://images.pexels.com/photos/20340988/pexels-photo-20340988.jpeg",
            "likes": "28",
            "conversations": "12"
        },
        {
            "itemId": 102,
            "authorId": 7,
            "timeStamp": "1 week ago",
            "url": "https://images.pexels.com/photos/32924876/pexels-photo-32924876.jpeg",
            "likes": "42",
            "conversations": "48"
        },
        {
            "itemId": 103,
            "authorId": 3,
            "timeStamp": "4 hrs ago",
            "url": "https://images.pexels.com/photos/32518841/pexels-photo-32518841.jpeg",
            "likes": "34",
            "conversations": "3"
        },
        {
            "itemId": 104,
            "authorId": 12,
            "timeStamp": "10 weeks ago",
            "url": "https://images.pexels.com/photos/32844898/pexels-photo-32844898.jpeg",
            "likes": "82",
            "conversations": "62"
        },
        {
            "itemId": 105,
            "authorId": 5,
            "timeStamp": "3 hrs ago",
            "url": "https://images.pexels.com/photos/32768989/pexels-photo-32768989.jpeg",
            "likes": "60",
            "conversations": "5"
        },
        {
            "itemId": 106,
            "authorId": 1,
            "timeStamp": "1 month ago",
            "url": "https://images.pexels.com/photos/3380151/pexels-photo-3380151.jpeg",
            "likes": "10",
            "conversations": "153"
        },
        {
            "itemId": 107,
            "authorId": 6,
            "timeStamp": "1 day ago",
            "url": "https://images.pexels.com/photos/17741885/pexels-photo-17741885.jpeg",
            "likes": "52",
            "conversations": "19"
        },
        {
            "itemId": 108,
            "authorId": 9,
            "timeStamp": "5 hrs ago",
            "url": "https://images.pexels.com/photos/10106075/pexels-photo-10106075.jpeg",
            "likes": "79",
            "conversations": "16"
        },
    ]

    return (
        <View style={{ paddingVertical: 30 }}>
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};