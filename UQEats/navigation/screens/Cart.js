import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {PrimaryButton} from './Buttons';
import {firebase} from '../../config';
import COLORS from '../../src/color';


export default function Cart({navigation}){
    // fetching the data
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection("OrderInfo");

  useEffect(async () => {
      todoRef
      .onSnapshot(
          querySnapshot => {
              const users = []
              querySnapshot.forEach(doc => {
                  const {name, price, subtext, url} = doc.data()
                  users.push({
                      id: doc.id,
                      name,
                      price,
                      subtext, 
                      url,
                  })
                  
              })
              setUsers(users)
          }
      )
  }, []);
  
  const CartCard = ({item}) => {

    return (
      <View style={style.cartCard}>
        <Image source={item.url} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.subtext}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
        <View style={style.actionBtn}>
            <AntDesign name="minuscircle" size={25} color={COLORS.purple} />
            <AntDesign name="pluscircle" size={25} color={COLORS.purple} />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}></Text>
        </View>
      </View>
    );
  };

  
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}} onPress={()=> navigation.navigate('Cart')}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={users}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
