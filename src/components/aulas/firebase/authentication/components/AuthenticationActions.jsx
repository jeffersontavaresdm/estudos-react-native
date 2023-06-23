import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseAuthMenu.styles";
import React from "react";
import firebaseAuthenticationService from "../service/FirebaseAuthenticationService";
import Card from "../../../../outros/card/Card";
import ActionButton from "./ActionButton";
import UserData from "./UserData";
import { ModalActions } from "./modalActions";

const AuthenticationActions = (
    {
      modalIsVisible,
      setModalIsVisible,
      actionType,
      setUserConected,
      setThereAreNoUsers,
    },
  ) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [user, setUser] = React.useState(null);
    const [userModalIsVisible, setUserModalIsVisible] = React.useState(false);
    const [userCount, setUserCount] = React.useState(0);

    React.useEffect(() => {
      if (userCount === 0) {
        setThereAreNoUsers(true);
      } else {
        setThereAreNoUsers(false);
      }
    }, [userCount]);

    const closeModal = () => {
      setName("");
      setEmail("");
      setPassword("");
      setUserModalIsVisible(false);
      setModalIsVisible(false);
    };

    const handleCadastro = async () => {
      try {
        let userOrError = await firebaseAuthenticationService.cadastrarComEmailSenha(email, password, name);

        if (userOrError.email === email) {
          setUserCount(prevState => prevState + 1);
          console.log("Usuário cadastrado com sucesso!");
        } else {
          console.error(`Usuário não cadastrado. Error: ${userOrError.code}`);
        }

        closeModal();
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error.message);
      }
    };

    const handleDeletar = async () => {
      try {
        const deletedAccount = await firebaseAuthenticationService.deletarContaComEmailSenha(email, password);

        if (deletedAccount) {
          console.log("Conta deletada com sucesso!");
          setUserCount((prevState) => prevState - 1);
          setUserConected(false);
        }

        closeModal();
      } catch (error) {
        console.error("Erro ao deletar conta:", error.message);
      }
    };

    const handleEntrar = async () => {
      let result = await firebaseAuthenticationService.conectarComEmailSenha(email, password);

      if (result.email === email) {
        setUser(result);
        setUserModalIsVisible(true);
        setUserConected(true);
      } else {
        console.error(`Error:\n${result}`);
      }
    };

    const handleSair = () => {
      try {
        const isOk = firebaseAuthenticationService.desconectarComEmailSenha(email, password);

        if (isOk === true) {
          setUserConected(false);
          closeModal();
        } else {
          console.error("Erro ao desconectar-se!");
        }
      } catch (error) {
        console.error(error);
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
                {
                  actionType !== ModalActions.DELETAR && (
                    <TextInput
                      style={styles.input}
                      placeholder="Nome"
                      value={name}
                      onChangeText={(text) => setName(text)}
                    />
                  )
                }
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
                  value={password}
                  onChangeText={(text) => setPassword(text)}
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
  }
;

export default AuthenticationActions;
