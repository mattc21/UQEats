import { View , Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from "react-native"
import React, {useState} from "react";
import {firebase} from '../config';

const Home = () => {
    const todoRef = firebase.firestore().collection('newData');
    const [addData, setAddData] = useState('');
    const [addPass, setAddPass] = useState('')

    // add a new field
    const addLogin = () => {
        if (addData && addData.length > 0) {
            // get timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                name: addData,
                password: addPass,
                createAt: timestamp
            };
            todoRef
                .add(data)
                .then(()=>{
                    // release new field state
                    setAddData('');
                    setAddPass('');
                    // release keyboard
                    Keyboard.dismiss();

                })
                .catch((error) => {
                    alert(error);
                })
        }
    }
    
    return(
        <View style = {{flex: 1, justifyContent:'center'}}>
            <View style={styles.formatContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your name'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddData(heading)}
                    value={addData}
                    multiline={true}
                    autoCapitalize='none'

                    />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your password'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddPass(heading)}
                    value={addPass}
                    multiline={true}
                    autoCapitalize='none'

                    />
                    <TouchableOpacity style={styles.button} onPress={addLogin}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formatContainer: {
        flexDirection: 'row',
        height:80,
        marginLeft: 10,
        marginRight: 10,
    },
    input :{
        height:48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button:{
        height:48,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width:80,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText:{
        color:'white',
        fontSize:20
    }
});

export default Home
