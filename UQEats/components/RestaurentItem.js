import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const localRestaurants = [
    {
        name: "Subway (COMING SOON!)",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfFs58mdz54mFvF4RjejBIdqPR0tJhJaABw&usqp=CAU",

    },
    {
        name: "Guzman Y Gomez (COMING SOON!)",
        image_url: "https://images.ctfassets.net/kzwrgxz9bwgr/7EEajdeeWvt7lishYoFgGz/1df4c28ffb55461a0f40f34b90f2199d/WSQ-NewWeb-GuzmanyGomez-HeroImgs.jpg"
    },
    {
        name: "Kenko Sushi (We have this one.)",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODDQeG2-FyNXITyxUvtcJe5-JdqPhKU84SA&usqp=CAU"
    },
    {
        name: "Boost Juice (COMING SOON!)",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbtZgjhHFMeSiQMyU1VWOQNCaOCO1kXk0YQ&usqp=CAU"
    },
    {
        name: "Chatime (COMING SOON!)",
        image_url: "data:image/png;base64,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"
    },
    {
        name: "Oriental Corner (COMING SOON!)",
        image_url: "data:image/png;base64,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"
    },
    {
        name: "Pizza Cafe (COMING SOON!)",
        image_url: "data:image/png;base64,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"
    },
    {
        name: "Bagel Bots (COMING SOON!)",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDZwGvZsEtc3USpxQViO1gyBOPmYIOquYYg&usqp=CAU"
    },
    {
        name: "Miss India (COMING SOON!)",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHKQgNV3U75WF-MIqb3V26olQ9WuihYYfhw&usqp=CAU"
    },
];

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 5 }}>
            {localRestaurants.map((restaurant, index) => (
                <View 
                    key={index}
                    style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}
                >
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name}/>
                </View>
            ))} 
        </TouchableOpacity>
        
    );
}

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
            <Text style={{ fontSize: 13, color: "gray"}}>15-20 min</Text>
        </View>
    </View>
);