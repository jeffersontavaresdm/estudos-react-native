import React from "react";
import { FlatList, Modal, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Card from "../../../outros/card/Card";
import styles from "./styles/firebaseTest.styles";

const ListaUsuarios = ({ modalVisible, setModalVisible, usuarios }) => {
  const renderItem = ({ item }) => (
    <Card key={item.nome}>
      <View style={{ margin: 4 }}>
        <Text style={styles.text}>Nome: {item.nome}</Text>
        <Text style={styles.text}>Idade: {item.idade}</Text>
      </View>
    </Card>
  );

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modal}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={[
              styles.button,
              {
                margin: 0,
                marginBottom: 16,
                marginTop: 8,
                width: 160,
                backgroundColor: "#DDD",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <AntDesign name="arrowleft" size={28} color="#000" />
            <Text style={[styles.text, { fontSize: 22, marginLeft: 16 }]}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item) => item.nome}
          data={usuarios}
          renderItem={renderItem}
          contentContainerStyle={styles.userArea}
        />
      </View>
    </Modal>
  );
};

export default ListaUsuarios;
