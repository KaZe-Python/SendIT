import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Input from "../components/Input";
import LoginButton from "../components/LoginButton";
import CreateAccount from "../components/CreateAccount";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#faca3c",
  },
  heading: {
    fontWeight: "bold",
    position: "absolute",
    top: "20%",
    fontSize: 24,
  },
  avatar: {
    position: "relative",
    marginTop: 40,
  },
  inputSection: {
    position: "relative",
    top: 100,
    backgroundColor: "#fcfcfc",
    width: Dimensions.get("screen").width,
    height: 380,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  input: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    top: 60,
    paddingTop: 9,
    paddingBottom: 20,
  },
});

export default LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  function login(){
    console.log(username, pass)
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <MaterialIcons name="account-circle" size={80} />
      </View>
      <Text style={styles.heading}>Welcome!</Text>
      <View style={styles.inputSection}>
        <View style={styles.input}>
          <Input placeholder="Username" textChange={setUsername} value={username}/>
        </View>
        <View style={styles.input}>
          <Input placeholder="Password" textChange={setPass} value={pass} pass={true}/>
        </View>
        <View style={styles.input}>
          <LoginButton text="Login" press={() => login()}/>
        </View>
        <View style={styles.input}>
        <CreateAccount press={() => navigation.push('signup')}/>
        </View>
        <View style={styles.input}>
          <TouchableOpacity>
            <Text
              style={{ fontWeight: "bold", textDecorationLine: "underline" }}
            >
              {" "}
              Forgot Password?{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
