import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native'; 
import { BottomNavigation, Card } from "react-native-paper";

const AreaNavigator = () => {
    return (
        <SafeAreaView>
            <View>
                <Card style={styles.phizz}>
                    <Image source={"../assets"}/>
                    <Card.Cover source={{ uri: 'https://buildcorp.com.au/wp-content/uploads/2020/07/Buildcorp-UQPhysiol-11.06.19-16.jpg' }} />
                </Card>   
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    phizz: {
        padding: 10,    
    }
})

export default AreaNavigator