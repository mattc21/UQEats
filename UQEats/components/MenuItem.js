import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import { Divider } from "react-native-paper";


const foods = [
    {
        title: "Miso Soup",
        description: "Starter. A traditional Japanese soup.",
        price: "$3.50",
        image: "https://images.mryum.com/api/2/img/prod/ed7c2645-8545-4bfd-b20e-216eec5d7dab/image-original/fit?size=300x300&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "Takoyaki",
        description: "Starter. Takoyaki is a popular street food from Osaka.",
        price: "$5.90",
        image: "https://images.mryum.com/api/2/img/prod/186a087c-dcd5-4a7b-aaa8-c9b9288f6b88/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "Chicken Curry ",
        description: "A simple yet insanely flavoursome homemade chicken curry.",
        price: "$11.30",
        image: "https://images.mryum.com/api/2/img/prod/b5c65dcc-d5cc-4862-a69c-78bcbd09bc8f/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    }

]

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            
        {foods.map((food, index) => (
            <View key={index}>
                <Divider />
                <View style={styles.menuItemStyle}>
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                    
                </View>
                <Button color={"#B19CD9"} title = {"Add " + food.title}/>
                <Divider />
            </View>
        ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    },
    priceStyle: {
        fontWeight: "100"
    }
});
 
const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly", }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text style={styles.priceStyle}>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
        source={{uri: props.food.image}} 
        style={{ width: 100, height: 100, borderRadius: 8 }}
            />
    </View>
)