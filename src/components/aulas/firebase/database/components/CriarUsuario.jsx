import React from "react";
import { Keyboard, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseTest.styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import firebaseDB from "../service/FirebaseDatabaseService";

const CriarUsuario = ({ modalVisible, setModalVisible, setUsuarios }) => {
  const [usuario, setUsuario] = React.useState({ nome: "", idade: 0 });

  const inputChangeNome = (nome) => {
    if (nome !== "") {
      setUsuario(prevState => ({ ...prevState, nome: nome }));
    }

    Keyboard.dismiss;
  };

  const inputChangeIdade = (idade) => {
    if (idade !== 0) {
      setUsuario(prevState => ({ ...prevState, idade: idade }));
    }

    Keyboard.dismiss;
  };

  async function criar() {
    if (usuario.nome === "" || !isNaN(usuario.nome)) {
      alert("Nome inválido");
      return;
    }

    if (usuario.idade === 0 || isNaN(usuario.idade)) {
      alert("Idade inválida");
      return;
    }

    await firebaseDB.criarUsuario(usuario);
    setUsuarios(await firebaseDB.pegarUsuarios());
    setModalVisible(false);
  }

  return (
    <Modal animationType={"slide"} visible={modalVisible}>
      <View style={styles.modal}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.voltarButton}>
            <AntDesign
              name={"arrowleft"}
              size={28}
              color={"#000"}
            />
            <Text style={[styles.text, { fontSize: 22, marginLeft: 16 }]}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={inputChangeNome}
          onSubmitEditing={inputChangeNome}
          placeholder={"Exemplo: Jonh Doe"}
          blurOnSubmit={true}
        />
        <TextInput
          style={styles.input}
          onChangeText={inputChangeIdade}
          onSubmitEditing={inputChangeIdade}
          placeholder={"Exemplo: 18"}
          blurOnSubmit={true}
          keyboardType={"numeric"}
        />
        <TouchableOpacity style={styles.inputButton} onPress={criar}>
          <Text style={styles.buttonText}>CRIAR</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CriarUsuario;
