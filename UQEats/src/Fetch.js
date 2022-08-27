import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, {useState, useEffect} from "react";
import {firebase} from '../config';

const Fetch = () => {
    const [users, setUsers] = useState([]);
    const todoRef = firebase.firestore().collection("newData");

    useEffect(async () => {
        todoRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach(doc => {
                    const {createdAt, heading} = doc.data()
                    users.push({
                        id: doc.id,
                        createdAt,
                        heading,
                    })
                    
                })
                setUsers(users)
            }
        )
    }, [])
    return (
        <View style={{flex:1, marginTop:100}}>
            <FlatList
                style={{height:'100%'}}
                data={users}
                numColumns={1}
                renderItem = {({item}) => (
                    <Pressable
                        style={styles.container}
                        >
                            <View style={styles.innercontainer}>
                                <Text style = {styles.itemHeading}>{item.createdAt}</Text>
                                <Text style = {styles.itemText}>{item.heading}</Text>
                            </View>
                        </Pressable>
                )}
                />
        </View>
    )
}

export default Fetch

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal:10,
    },

    innercontainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    itemHeading: {
        fontWeight: 'bold'
    },
    itemText: {
        fontWeight: '300'
    }
})