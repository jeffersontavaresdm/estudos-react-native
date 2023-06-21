import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import firebaseDB from "./config/database";

const DeletarUsuario = ({ modalVisible, setModalVisible, setUsuarios }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  async function handleDelete() {
    if (nome === "" || idade === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    await firebaseDB.deletarUsuario(nome, idade);

    setNome("");
    setIdade("");

    setModalVisible(false);
    setUsuarios(await firebaseDB.pegarUsuarios());
  }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modal}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={[styles.button, { marginTop: 8, width: 160 }]}>
            <AntDesign name="arrowleft" size={28} color="#000" />
            <Text style={[styles.text, { fontSize: 22, marginLeft: 16 }]}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.confirmText}>
            Insira o nome e a idade do usuário a ser deletado:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>DELETAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDD",
    padding: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DeletarUsuario;
