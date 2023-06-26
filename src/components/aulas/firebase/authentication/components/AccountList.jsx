import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import firebaseAuthenticationService from "../service/FirebaseAuthenticationService";
import Card from "../../../../outros/card/Card";
import accountListStyles from "../styles/accountList.styles";

const AccountList = ({ modalIsVisible, closeModal }) => {
  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const usuarios = await firebaseAuthenticationService.listarUsuarios();
        setUsuarios(usuarios);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    })();
  }, []);

  function handleItem(item) {
    return (
      <View style={accountListStyles.itemContainer}>
        <Card>
          <Text style={accountListStyles.itemText}>ID: {item.id}</Text>
          <Text style={accountListStyles.itemText}>Name: {item.name}</Text>
          <Text style={accountListStyles.itemText}>Email: {item.email}</Text>
        </Card>
      </View>
    );
  }

  return usuarios.length !== 0 && (
    <Modal
      visible={modalIsVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={closeModal}
    >
      <View style={accountListStyles.modalContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={usuarios}
          renderItem={({ item }) => handleItem(item)}
        />
        <View style={accountListStyles.buttonContainer}>
          <TouchableOpacity
            style={accountListStyles.modalButton}
            onPress={closeModal}
          >
            <Text style={accountListStyles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AccountList;
