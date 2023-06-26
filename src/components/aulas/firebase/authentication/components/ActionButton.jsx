import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/firebaseComponentStyles";
import React from "react";
import { ModalActions } from "./modalActions";

const ActionButton = (
  {
    actionType,
    handleCadastro,
    handleDeletar,
    handleEntrar,
    handleSair,
  },
) => {
  switch (actionType) {
    case ModalActions.CRIAR : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "darkblue" }]}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>{actionType.charAt(0).toUpperCase() + actionType.slice(1)}</Text>
        </TouchableOpacity>
      );
    }
    case ModalActions.DELETAR : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "red" }]}
          onPress={handleDeletar}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      );
    }
    case ModalActions.CONECTAR : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "darkgreen" }]}
          onPress={handleEntrar}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      );
    }
    case ModalActions.DESCONECTAR : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "darkred" }]}
          onPress={handleSair}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      );
    }
  }
};

export default ActionButton;
