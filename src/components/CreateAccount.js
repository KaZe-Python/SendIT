import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width / 2 * 1.7,
        backgroundColor: '#000',
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fcfcfc'
    },
    arrowV: {
        position: 'absolute',
        right: 10,
        backgroundColor: "#fafafa",
        borderRadius: 50,
        width: 30,
        height: 30,
    },
    arrow:{
        position: 'relative',
        bottom: 5,
        right: 4
    }

})

export default CreateAccountButton = (props) => {
    return(
        <TouchableOpacity onPress={props.press}>
            <View style={styles.container}>
                <Text style={styles.text}>Create Account</Text>
                <View style={styles.arrowV}>
                <MaterialIcons name='add' size={40} style={styles.arrow}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}