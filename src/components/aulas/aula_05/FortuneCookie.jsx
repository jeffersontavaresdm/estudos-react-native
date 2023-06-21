import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FortuneCookie = () => {
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState(require("../../../assets/biscoito-fechado.png"));

  let frases = [
    "Acredite em si mesmo e conquiste o impossível.",
    "A sorte favorece aqueles que trabalham duro.",
    "Grandes oportunidades surgirão em seu caminho.",
    "A felicidade está nas pequenas coisas da vida.",
    "O sucesso é resultado da perseverança e da determinação.",
    "Acredite no poder dos seus sonhos.",
    "A vida é uma jornada, aproveite cada passo.",
    "O amor é o ingrediente secreto para a felicidade.",
    "Acredite no poder da sua intuição.",
    "Sorria para o mundo, e o mundo sorrirá para você.",
  ];

  const breakcookie = () => {
    let random = Math.floor(Math.random() * frases.length);
    setText(frases[random]);
    setImage(require("../../../assets/biscoito-aberto.png"));
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={breakcookie}>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>testando</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 3,
    borderColor: "#dd7b22",
    borderRadius: 25,
    backgroundColor: "darkcyan",
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

export default FortuneCookie;
