
import React from 'react';
import {View, Text} from 'react-native';

export default function OrderScreen({navigation}) {
    return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Text
                onPress={()=> navigation.navigate('Order')}
                style = {{fontSize: 26, fontWeight: 'bold'}}> Order Screen</Text>
        </View>
    );
}