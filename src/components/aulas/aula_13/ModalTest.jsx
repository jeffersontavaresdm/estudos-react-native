import { Button, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

const ModalTest = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  function handleAbrirModal() {
    setModalVisible(true);
  }

  function handleFecharModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title={"Abrir Modal"} onPress={handleAbrirModal} />
      <Modal animationType={"slide"} visible={modalVisible}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View style={{
            backgroundColor: "#404040",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 15,
            height: 350,
            width: 350,
          }}>
            <Text style={{ fontSize: 30, textAlign: "center", color: "coral" }}>
              Testando Modal!
            </Text>
            <Button title={"Fechar Modal"} onPress={handleFecharModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalTest;
