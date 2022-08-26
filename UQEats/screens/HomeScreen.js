import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import RestaurantItem from "../components/RestaurentItem";

const HomeScreen = () => {
    return (
        <SafeAreaView >
            <ScrollView showsVerticalScrollIndicator={false}>
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen;