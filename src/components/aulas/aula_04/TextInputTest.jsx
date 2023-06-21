import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ProgrammerImage } from "../../outros/image/ProgrammerImage";

const TextInputTest = () => {
  const [input, setInput] = React.useState("");
  const [inputText, setInputText] = React.useState("");

  const inputChange = (text) => {
    if (text.length === 0) {
      setInput("")
      setInputText("");
    } else {
      setInput(text);
    }
  };

  const handleSubmit = () => {
    setInputText(input);
  };

  const buttonPressed = () => {
    if (input === "") {
      alert("Digite alguma coisa");
      return;
    }

    setInputText(input);
  };

  return (
    <View style={styles.card}>
      <ProgrammerImage />
      <TextInput
        style={styles.input} onChangeText={inputChange} onSubmitEditing={handleSubmit}
        placeholder={"Digite algo"}
        underlineColorAndroid={"transparent"}
        blurOnSubmit={false}
      />
      <Button title={"Press"} onPress={buttonPressed} />
      <Text style={styles.text}>{inputText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 8,
    margin: 8,
    padding: 8,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default TextInputTest;
