import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/firebaseComponent.styles";
import Card from "../../../../outros/card/Card";

const UserData = ({ userModalIsVisible, user, closeModal }) => {
  return (
    <Modal
      visible={userModalIsVisible}
      animationType={"fade"}
    >
      <View style={styles.modalContainer}>
        <Card>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.userModalHeader}>Usuário conectado!</Text>
            <Text style={styles.userText}>ID do usuario: {user.providerId}</Text>
            <Text style={styles.userText}>UID do usuario: {user.uid}</Text>
            <Text style={styles.userText}>Email do usuario: {user.email}</Text>
          </View>
          <TouchableOpacity
            style={[styles.modalButton, { flex: 0, backgroundColor: "gray", height: 50 }]}
            onPress={closeModal}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </Modal>
  );
};

export default UserData;
