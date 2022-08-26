import React from "react";
import { View, Text, Image } from "react-native";

export default function RestaurantItem() {
    return (
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    );
}

const RestaurantImage = () => (
    <Image
    source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQll1WDQpBTzh3W4daMQKruJEE6uOyrIsK1KA&usqp=CAU"
    }}
    style={{ width: "100%", height: 180}}
    />
);

const RestaurantInfo = () => (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10,}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>Subway</Text>
            <Text style={{ fontSize: 13, color: "gray"}}>15-20 min</Text>
        </View>
    </View>
)