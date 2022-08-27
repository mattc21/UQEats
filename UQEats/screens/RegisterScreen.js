import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

const RegisterScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction />
                    <Appbar.Content title="Register" style={registerStyle.title} mode="center-aligned"/>
                </Appbar>
                <View style={registerStyle.viewContent}>
                    <TextInput mode="outlined" style={registerStyle.textInputsContent} label="Name"/>
                    <TextInput mode="outlined" style={registerStyle.textInputsContent}label="Email" keyboardType="email-address"/>
                    <TextInput mode="outlined" style={registerStyle.textInputsContent}label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline"/>} /> 
                    <TextInput mode="outlined" style={registerStyle.textInputsContent}label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline"/>} /> 
                    <TextInput mode="outlined" style={registerStyle.textInputsContent}label="Phone number" keyboardType="phone-pad" />
                    <Button mode="contained">REGISTER</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const registerStyle = StyleSheet.create({
    viewContent: {
        padding: 15,
        paddingTop: 0,
    },
    textInputsContent: {
        marginBottom: 8
    },
    title: {
        marginTop: 10,
    }
})

export default RegisterScreen;