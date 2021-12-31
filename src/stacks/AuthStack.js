import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Root = createNativeStackNavigator()

export default AuthStack = () => {
    return (
        <Root.Navigator screenOptions={{headerShown: false}}>
            <Root.Screen name='login' component={LoginScreen}/>
            <Root.Screen name='signup' component={SignUpScreen} />
        </Root.Navigator>
    )
}