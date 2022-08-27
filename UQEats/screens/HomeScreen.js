import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet } from "react-native";
import RestaurantItem from "../components/RestaurentItem";

const HomeScreen = () => {
    return (
        <View style = {homeScreenStyles.background} cont>
            <ScrollView style = {homeScreenStyles.background}showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingVertical: 50 }}>
                <Image
                    source={
                        require("../assets/UQEats(1).png")
                    }
                    style = {homeScreenStyles.logo}
                />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
            </ScrollView>
        </View>
            

    )
}

const homeScreenStyles = StyleSheet.create({
    logo: {
        width: "80%",
        height: "30%",
        margin: 10,
        left: 25,
    },
    background: {
        backgroundColor: "#eee",
        flexGrow: 1,
        height: "100%",
        width: "100%",
        top: 0
    }
});

export default HomeScreen;