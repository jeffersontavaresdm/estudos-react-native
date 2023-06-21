import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

export default function UseState() {
  const [contador, setContador] = React.useState(0); // view1
  const [nome, setNome] = React.useState(""); // view2
  const [input, setInput] = React.useState(""); // view2

  function handleNome() {
    setNome(input);

    Keyboard.dismiss;
  }

  return (
    <View style={styles.card}>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.botao} onPress={() => setContador(prevState => prevState + 1)}>
          <Text style={styles.text}>BOTAO</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { marginTop: 16 }]}>Contador: {contador}</Text>
      </View>
      <View style={styles.view2}>
        <TextInput
          style={styles.input}
          value={input}
          placeholder={"Digite seu nome..."}
          onChangeText={(text) => setInput(text)}
        />
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 24 }}>
          <TouchableOpacity style={styles.botao} onPress={handleNome}>
            <Text style={styles.text}>Mudar Nome</Text>
          </TouchableOpacity>
          <Text style={[styles.text, { fontSize: 40, marginTop: 24 }]}>{nome}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  view1: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    backgroundColor: "#DDD",
    borderTopWidth: 2,
  },
  botao: {
    backgroundColor: "lightblue",
    width: 150,
    borderRadius: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.5,
    backgroundColor: "#FFF",
    margin: 16,
    padding: 8,
    elevation: 10,
    borderRadius: 4
  },
});
