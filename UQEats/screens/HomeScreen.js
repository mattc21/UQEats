import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
} from "react-native";
import RestaurantItem from "../components/RestaurentItem";
import { TabNavigator } from "../navigation/TabNavigator";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.background} cont>
      <ScrollView
        style={homeScreenStyles.background}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 50 }}
      >
        <Image
          source={require("../assets/UQEats(1).png")}
          style={homeScreenStyles.logo}
        />
        <RestaurantItem />
      </ScrollView>
    </View>
  );
};

const homeScreenStyles = StyleSheet.create({
  logo: {
    width: "90%",
    height: "12%",
    margin: 10,
    left: 8,
  },
  background: {
    backgroundColor: "#CBC3E3",
    flexGrow: 1,
    height: "100%",
    width: "100%",
    top: 0,
  },
});

export default HomeScreen;
