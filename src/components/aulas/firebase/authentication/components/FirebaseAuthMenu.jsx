import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseAuthMenu.styles";
import AuthenticationActions from "./AuthenticationActions";
import { ModalActions } from "./modalActions";

const FirebaseAuthMenu = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [actionType, setActionType] = useState("");
  const [userConected, setUserConected] = React.useState(false);

  const openModal = (type) => {
    setActionType(type);
    setModalIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Authentication</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkblue" }]}
        onPress={() => openModal(ModalActions.CRIAR)}
      >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
        onPress={() => openModal(ModalActions.DELETAR)}
      >
        <Text style={styles.buttonText}>Deletar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkgreen", opacity: userConected ? 0.5 : 1 }]}
        onPress={() => openModal(ModalActions.CONECTAR)}
        disabled={userConected}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <AuthenticationActions
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        actionType={actionType}
        setUserConected={setUserConected}
      />
    </View>
  );
};

export default FirebaseAuthMenu;
