import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native'; 
import { Button, Card, TextInput, Divider } from "react-native-paper";

const ConfirmationScreen = () => {
    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.view}>
                <Image
                    source={
                        require("../assets/UQEats-removebg-preview(1).png")
                    }
                    style={styles.logo}
                />
                <Card>
                    <Card.Title
                    title='Personal Information'
                    titleStyle={styles.headline}
                    />
                    <Card.Content>
                        <TextInput label="First Name" ></TextInput>
                        <TextInput label="Last Name" ></TextInput>
                        <TextInput label="Room Number" />
                        <TextInput label="Delivery Instructions"/>
                    </Card.Content>
                </Card>
                <Card mode="elevated">
                    <Card.Title 
                    title="Financial Information"
                    titleStyle={styles.headline}/>
                    <Card.Content >
                        <TextInput label="Credit Card Number" secureTextEntry = {true}></TextInput>
                        <TextInput label="CVV" secureTextEntry = {true}></TextInput>
                        <TextInput label="Expiration Date" secureTextEntry = {true}></TextInput>

                        <Button mode="contained"style={styles.button} >SUBMIT</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    button: {
        margin: 0,
        top: 40,
        marginBotton: 5,
        padding: 5,
        mode: "contained",
    },
    content: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    view: {
        width: "90%",
        height: "3%",
        bottom: 560
    },
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 200,
        left: 60,
        top: 5
    },
    logo: {
        right: -110,
        bottom: -100,
        padding: 5,        
        width: "30%",
        resizeMode: "contain"
    }
});

export default ConfirmationScreen;