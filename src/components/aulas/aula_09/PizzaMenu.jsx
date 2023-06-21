import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

const PizzaMenu = () => {
  const [itemSelecionado, setItemSelecionado] = React.useState(1);
  const sabores = [
    { id: 1, nome: "Calabresa", preco: 29.90 },
    { id: 2, nome: "Frango", preco: 39.90 },
    { id: 3, nome: "Carne do Sol", preco: 49.90 },
    { id: 4, nome: "Peperone", preco: 25.90 },
    { id: 5, nome: "Chocolate", preco: 30.00 },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Menu Pizza</Text>
      <Picker
        selectedValue={sabores[itemSelecionado - 1].id}
        onValueChange={(itemValue) => setItemSelecionado(itemValue)}
      >
        {
          sabores.map((sabor) => {
            return <Picker.Item key={sabor.id} value={sabor.id} label={sabor.nome} />;
          })
        }
      </Picker>
      <Text style={[styles.text, { fontSize: 20, marginTop: 20 }]}>
        {
          sabores[itemSelecionado - 1] && `Você escolheu pizza de: ${sabores[itemSelecionado - 1].nome}`
        }
      </Text>
      <Text style={[styles.text, { fontSize: 20 }]}>
        {
          sabores[itemSelecionado - 1] && `Valor: ${sabores[itemSelecionado - 1].preco.toFixed(2)}`
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  text: {
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default PizzaMenu;
