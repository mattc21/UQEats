import React from "react";
import { View, Image, Text } from "react-native";

const image = "https://images.ctfassets.net/kzwrgxz9bwgr/7EEajdeeWvt7lishYoFgGz/1df4c28ffb55461a0f40f34b90f2199d/WSQ-NewWeb-GuzmanyGomez-HeroImgs.jpg"
const title = "Guzman Y Gomez"

export default function AboutGuzman() {
    return (
        <View>     
            <RestaurantImage image ={image}/>
            <RestaurantInfo info={title} />
        </View>
    )
};

const RestaurantImage = (props) => (
    <Image
    source={{
        uri: props.image
    }}
    style={{ width: "100%", height: 180}}
    />
);

const RestaurantInfo = (props) => (
    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10,}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
        </View>
    </View>
);
