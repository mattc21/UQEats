import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AreaNavigator from "../screens/AreaNavigator";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={LoginScreen}/>
            <Tab.Screen name="Browse" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default Tabs;