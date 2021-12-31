import { View, Text, StyleSheet } from "react-native";
import { Component } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen!</Text>
      </View>
    );
  }
}

export default HomeScreen;
