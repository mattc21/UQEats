import { Stylesheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { Text } from "react-native";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  QuerySnapshot,
  getDocs,
} from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { FlatList } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Jobs({ navigation }) {
  const [users, setUsers] = useState([]);
  const todoRef = collection(database, "jobs");
  const changeScreens = (item, id) => {
    navigation.navigate("Chat", {
      order: item,
      chatID: id,
    });
  };
  useEffect(async () => {
    // const querySnapshot = await getDocs(collection(database, "jobs"));
    // querySnapshot.forEach((doc) =>
    //   console.log(`${doc.id} => ${doc.data().text} ${doc.data().heading}`)
    // );
    changeScreens();
    let id = -1;
    async function Query() {
      const querySnapshot = await getDocs(collection(database, "jobs"));
      querySnapshot.forEach((doc) =>
        console.log(`${doc.id} => ${doc.data().text} ${doc.data().heading}`)
      );
      querySnapshot.forEach((doc) =>
        doc.data().num == 2
          ? changeScreens(doc.data().text, doc.data().heading)
          : null
      );
      // id = doc.data().text;
      setTimeout(() => Query(), 3000);
    }

    // while (true) {
    setTimeout(() => Query(), 3000);
    // if (id >= 0) {
    //   break;
    // }
    // }

    // todoRef.onSnapshot((QuerySnapshot) => {
    //   const users = [];
    //   QuerySnapshot.forEach((doc) => {
    //     const { heading, text } = doc.data();
    //     users.push({
    //       id: doc.id,
    //       heading,
    //       text,
    //     });
    //   });
    //   setUsers(users);
    // });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Waiting.. {users}</Text>
    </View>
    //   <FlatList>
    //     style={{ height: "100%" }}
    //     data = {users}
    //     numColumns = {1}
    //     renderItems ={" "}
    //     {({ item }) => (
    //       <Pressable>
    //         <View>
    //           <Text>
    //             {item.heading}
    //             {item.text}
    //           </Text>
    //         </View>
    //       </Pressable>
    //     )}
    //   </FlatList>
  );
}

// export default Jobs;
