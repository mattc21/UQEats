import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import { Divider } from "react-native-paper";


const foods = [
    {
        title: "Burrito",
        description: "Burrito with different choices of fillings and sizes!",
        price: "$8.20",
        image: "https://www.guzmanygomez.com.au/wp-content/uploads/2021/05/1128x612-AUS-Burrito-Chicken.jpg"
    },
    {
        title: "Burrito Bowl",
        description: "Want the delicious Mexican flavours of our burrito but feel like something without the tortilla? Try your favourite burrito in a bowl!",
        price: "$8.20",
        image: "https://images.mryum.com/api/2/img/prod/186a087c-dcd5-4a7b-aaa8-c9b9288f6b88/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "Nachos",
        description: "A simple yet insanely flavoursome homemade chicken curry.",
        price: "$11.30",
        image: "https://images.mryum.com/api/2/img/prod/b5c65dcc-d5cc-4862-a69c-78bcbd09bc8f/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "$3 Tacos",
        description: "Whether it's family taco night or simply a tasty top up, the $3 Taco takes the traditional taco kit and makes it cleaner, easier and better value than ever! ",
        price: "$3.00",
        image: "https://images.mryum.com/api/2/img/prod/140de059-996d-4401-a959-e328494c0277/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "Nachos",
        description: "Nothing says 'let's party' like nachos! We take our house-made corn chips and load them up with the filling of your choice.",
        price: "$9.50",
        image: "https://images.mryum.com/api/2/img/prod/b5c65dcc-d5cc-4862-a69c-78bcbd09bc8f/image-original/fit?size=500x500&auth=NDI4ODAwMzkxNg__"
    },
    {
        title: "Cali Burrito",
        description: "Fries in a burrito, need we say more?",
        price: "$9.50",
        image: "data:image/jpeg;base64,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"
    },
    {
        title: "Pepsi Max",
        description: "600ml bootle of Pepsi Max.",
        price: "$4.90",
        image: "data:image/jpeg;base64,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"
    },
    {
        title: "Water",
        description: "Bottle of Water.",
        price: "$3.00",
        image: "data:image/jpeg;base64,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"
    },
    {
        title: "Green Tea",
        description: "Warm green cup of green tea.",
        price: "$11.30",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WLymbwnwlLBeHdBO9QJB3suRYLmt_Zwo3Q&usqp=CAU"
    },

]

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            
        {foods.map((food, index) => (
            <View key={index}>
                <Divider />
                <View style={styles.menuItemStyle}>
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                    
                </View>
                <Button color={"#B19CD9"} title = {"Add " + food.title}/>
                <Divider />
            </View>
        ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600"
    },
    priceStyle: {
        fontWeight: "100"
    }
});
 
const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly", }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text style={styles.priceStyle}>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
        source={{uri: props.food.image}} 
        style={{ width: 100, height: 100, borderRadius: 8 }}
            />
    </View>
)