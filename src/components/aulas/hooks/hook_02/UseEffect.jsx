import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UseEffect() {
  const [ativado, setAtivado] = React.useState(false); // view1
  const [estado, setEstado] = React.useState("Inativo"); // view1

  const [nome, setNome] = React.useState(""); // view2
  const [input, setInput] = React.useState(""); // view2

  // view1
  React.useEffect(() => {
    if (ativado) {
      setEstado("Ativo");
    } else {
      setEstado("Inativo");
    }
  }, [ativado]);

  // view2
  React.useEffect(() => {
    (async () => await AsyncStorage.setItem("nomes", nome))();
  }, [nome]);

  // view2
  React.useEffect(() => {
    (async () => {
      const nomes = await AsyncStorage.getItem("nomes");

      if (nomes != null) {
        setNome(nomes);
      }
    })();
  }, []);

  function mudarNome() {
    setNome(input);
    setInput("");
  }

  function handleInput(text) {
    setInput(text);

    Keyboard.dismiss;
  }

  return (
    <View style={styles.card}>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.botao} onPress={() => setAtivado(!ativado)}>
          <Text style={styles.botaoText}>Mudar Estado</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: "lightblue" }}>
          <Text style={styles.text}>{estado}</Text>
        </View>
      </View>
      <View style={styles.view2}>
        <TextInput
          style={styles.input}
          value={input}
          placeholder={"Digite seu nome..."}
          onChangeText={(text) => handleInput(text)}
        />
        <TouchableOpacity style={[styles.botao, { backgroundColor: "lightblue" }]} onPress={mudarNome}>
          <Text style={[styles.botaoText, { color: "red", fontSize: 28 }]}>Mudar Nome</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { color: "#000" }]}>{nome}</Text>
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
    justifyContent: "space-around",
  },
  view2: {
    flex: 1,
    backgroundColor: "#DDD",
    borderTopWidth: 2,
  },
  text: {
    color: "darkred",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    margin: 24,
    borderWidth: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "darkred",
  },
  botaoText: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.5,
    backgroundColor: "#FFF",
    margin: 16,
    padding: 8,
    elevation: 10,
    borderRadius: 4,
  },
});
