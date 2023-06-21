import { FlatList, View } from "react-native";
import React from "react";
import Person from "./Person";
import styles from "./styles";

const ViewManipulation3 = () => {
  const [feed, setFeed] = React.useState([
    { nome: "jefferson", idade: 35 },
    { nome: "joao", idade: 22 },
    { nome: "maria", idade: 19 },
    { nome: "jose", idade: 16 },
    { nome: "valentina", idade: 40 },
  ]);

  const handleRender = ({ item }) => {
    return <Person data={item} />;
  };

  return (
    <View style={styles.card}>
      <FlatList
        keyExtractor={(item) => item.idade}
        data={feed}
        renderItem={(item) => handleRender(item)}
      />
    </View>
  );
};

export default ViewManipulation3;
