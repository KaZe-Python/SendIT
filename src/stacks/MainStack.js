import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const Root = createNativeStackNavigator()

export default MainStack = () => {
    return(
        <Root.Navigator screenOptions={{headerShown: false}}>
            <Root.Screen name="home" component={HomeScreen}/>
        </Root.Navigator>
    )
}