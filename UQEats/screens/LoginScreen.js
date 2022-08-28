import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Button, Card, TextInput, Divider } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Image
          source={require("../assets/UQEats-removebg-preview(1).png")}
          style={styles.logo}
        />
        <Card mode="elevated">
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button style={{ padding: 5 }}>FORGOT EMAIL/PASSWORD</Button>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("HomeScreen")}
              mode="contained"
            >
              LOGIN
            </Button>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => navigation.navigate("Registration")}
            >
              REGISTER{" "}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 0,
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
    width: "80%",
    bottom: 100,
  },
  logo: {
    right: -65,
    bottom: -80,
    padding: 5,
    width: "50%",
    resizeMode: "contain",
  },
});

export default LoginScreen;
