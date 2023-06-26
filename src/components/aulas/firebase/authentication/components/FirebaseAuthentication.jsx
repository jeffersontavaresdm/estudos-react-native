import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseComponent.styles";
import AuthenticationActions from "./AuthenticationActions";
import { ModalActions } from "./modalActions";
import firebaseAuthenticationService from "../service/FirebaseAuthenticationService";

const FirebaseAuthentication = () => {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [actionType, setActionType] = React.useState("");
  const [userConected, setUserConected] = React.useState(false);
  const [thereAreNoUsers, setThereAreNoUsers] = React.useState(true);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let hasUsers = await firebaseAuthenticationService.listarUsuarios();
      if (hasUsers) {
        setUsers(hasUsers);
        setThereAreNoUsers(false);
      }
    })();
  }, []);

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
        style={[styles.button, { backgroundColor: "goldenrod", opacity: thereAreNoUsers ? 0.5 : 1 }]}
        onPress={() => openModal(ModalActions.LISTAR)}
        disabled={thereAreNoUsers}
      >
        <Text style={styles.buttonText}>List Accounts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkblue" }]}
        onPress={() => openModal(ModalActions.CRIAR)}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red", opacity: thereAreNoUsers ? 0.5 : 1 }]}
        onPress={() => openModal(ModalActions.DELETAR)}
        disabled={thereAreNoUsers}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkgreen", opacity: userConected ? 0.5 : 1 }]}
        onPress={() => openModal(ModalActions.CONECTAR)}
        disabled={userConected}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "darkred", opacity: !userConected ? 0.5 : 1 }]}
        onPress={() => openModal(ModalActions.DESCONECTAR)}
        disabled={!userConected}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <AuthenticationActions
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        actionType={actionType}
        setUserConected={setUserConected}
        setThereAreNoUsers={setThereAreNoUsers}
        users={users}
        setUsers={setUsers}
      />
    </View>
  );
};

export default FirebaseAuthentication;
