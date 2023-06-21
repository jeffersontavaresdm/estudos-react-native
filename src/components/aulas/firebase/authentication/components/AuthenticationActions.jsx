import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseAuthMenu.styles";
import React from "react";
import firebaseAuthenticationService from "../service/FirebaseAuthenticationService";
import Card from "../../../../outros/card/Card";
import ActionButton from "./ActionButton";
import UserData from "./UserData";

const AuthenticationActions = (
  {
    modalIsVisible,
    setModalIsVisible,
    actionType,
    setUserConected,
  },
) => {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [userModalIsVisible, setUserModalIsVisible] = React.useState(false);

  const closeModal = () => {
    setEmail("");
    setSenha("");
    setUserModalIsVisible(false);
    setModalIsVisible(false);
  };

  const handleCadastro = async () => {
    try {
      await firebaseAuthenticationService.cadastrarComEmailSenha(email, senha);
      closeModal();
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };

  const handleDeletar = async () => {
    try {
      await firebaseAuthenticationService.deletarContaComEmailSenha(email, senha);
      setUserConected(false);
      closeModal();
    } catch (error) {
      console.error("Erro ao deletar conta:", error.message);
    }
  };

  const handleEntrar = async () => {
    try {
      setUser(await firebaseAuthenticationService.conectarComEmailSenha(email, senha));
      setUserModalIsVisible(true);
    } catch (error) {
      console.error("Erro ao conectar-se:", error.message);
      return;
    }

    setUserConected(true);
  };

  const handleSair = async () => {
    try {
      setUser(await firebaseAuthenticationService.desconectarComEmailSenha(email, senha));
      setUserConected(false);
      closeModal();
    } catch (error) {
      console.error("Erro ao conectar-se:", error.message);
    }
  };

  return (
    <View>
      <Modal
        visible={modalIsVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Card>
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
              <View style={{ flexDirection: "row" }}>
                <ActionButton
                  actionType={actionType}
                  handleCadastro={handleCadastro}
                  handleDeletar={handleDeletar}
                  handleEntrar={handleEntrar}
                  handleSair={handleSair}
                />
                <TouchableOpacity
                  style={[styles.modalButton, { marginLeft: 8, backgroundColor: "gray" }]}
                  onPress={closeModal}
                >
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </View>
      </Modal>
      {
        user && (
          <UserData
            userModalIsVisible={userModalIsVisible}
            user={user}
            closeModal={closeModal}
          />
        )
      }
    </View>
  );
};

export default AuthenticationActions;
