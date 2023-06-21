import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Person = ({ data }) => {
  return (
    <View style={styles.areaPessoa}>
      <Text style={styles.textoPessoa}>Nome: {data.nome}</Text>
      <Text style={styles.textoPessoa}>Idade: {data.idade}</Text>
    </View>
  );
};

export default Person;
