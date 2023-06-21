import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/firebaseAuthMenu.styles";
import React from "react";

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
    case "criar" : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "darkblue" }]}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      );
    }
    case "deletar" : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "red" }]}
          onPress={handleDeletar}
        >
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      );
    }
    case "conectar" : {
      return (
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: "darkgreen" }]}
          onPress={handleEntrar}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      );
    }
    case "desconectar" : {
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
