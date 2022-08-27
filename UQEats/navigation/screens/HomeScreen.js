import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, ScrollView, View, Image, StyleSheet, Text} from "react-native";
import RestaurantItem from "../../components/RestaurentItem";
import MyStack from "../Mystack";

export default function HomeScreen({navigation}) {
    return (
        <NavigationContainer independent={true}>
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text
                onPress={()=> navigation.navigate('Home')}></Text>
            </View>
        
            <View style = {homeScreenStyles.background} cont>
                <ScrollView style = {homeScreenStyles.background}showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingVertical: 50 }}>
                    <Image
                        source={
                            require("../../assets/UQEats(1).png")
                        }
                        style = {homeScreenStyles.logo}
                    />
                    <MyStack />
                </ScrollView>
            </View>
            </NavigationContainer>
            
       
        

    )
}

const homeScreenStyles = StyleSheet.create({
    logo: {
        width: "100%",
        height: "15%",
    },
    background: {
        backgroundColor: "#CBC3E3",
        flexGrow: 1,
        height: "100%",
        width: "100%",
        top: 0
    }
});
