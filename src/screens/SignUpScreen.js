import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

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
    top: 90,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <MaterialIcons name="account-circle" size={80} />
      </View>
      <Text style={styles.heading}>Create Account!</Text>
      <View style={styles.inputSection}>
        <View style={styles.input}>
          <Input
            placeholder="Username"
            textChange={setUsername}
            value={username}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Password"
            textChange={setPass}
            value={pass}
            pass={true}
          />
        </View>
        <View style={styles.input}>
          <LoginButton
            text="Sign Up"
            press={() => console.log([username, pass])}
          />
        </View>
        <View style={styles.input}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text style={{ fontWeight: "bold" }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
