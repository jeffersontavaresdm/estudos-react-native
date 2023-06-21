import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import firebaseAuthenticationService from "./service/FirebaseAuthenticationService";
import styles from "./styles/firebaseAuthMenu.styles";

const FirebaseAuthMenu = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleCadastro = async () => {
    try {
      await firebaseAuthenticationService.cadastrarComEmailSenha(email, senha);
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };

  const handleDeletarConta = async () => {
    try {
      await firebaseAuthenticationService.deletarContaComEmailSenha(email, senha);
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao deletar conta:", error.message);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEmail("");
    setSenha("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Authentication
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkblue" }]}
        onPress={() => openModal("criar")}
      >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => openModal("deletar")}
      >
        <Text style={styles.buttonText}>Deletar Conta</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              {
                modalType === "criar" ? (
                  <TouchableOpacity
                    style={[styles.modalButton, { backgroundColor: "darkblue" }]}
                    onPress={handleCadastro}
                  >
                    <Text style={styles.buttonText}>Criar</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[styles.modalButton, { backgroundColor: "red" }]}
                    onPress={handleDeletarConta}
                  >
                    <Text style={styles.buttonText}>Deletar</Text>
                  </TouchableOpacity>
                )
              }
              <TouchableOpacity
                style={[styles.modalButton, { marginLeft: 8, backgroundColor: "gray" }]}
                onPress={closeModal}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FirebaseAuthMenu;
