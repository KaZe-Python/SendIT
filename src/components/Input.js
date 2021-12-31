import {
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.8,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Input = (props) => {
  if (props.pass) {
    return (
      <KeyboardAvoidingView>
        <TextInput
          style={[styles.container, {}]}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={(v) => props.textChange(v)}
          passwordRules="required: upper; required: lower; required: digit; required: special; minLength: 8;"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView>
      <TextInput
        style={styles.container}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={(v) => props.textChange(v)}
        autoCorrect={false}
      />
    </KeyboardAvoidingView>
  );
};
