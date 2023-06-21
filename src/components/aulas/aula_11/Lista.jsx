import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Lista = (item) => {
  if (!item.data) return null;
  const feed = item.data;

  const [isLiked, setIsLiked] = React.useState(false);
  const [curtidas, setCurtidas] = React.useState(feed.curtidas);

  function handleLikePressed() {
    setIsLiked(!isLiked);

    if (!isLiked) {
      setCurtidas(prevState => prevState + 1);
    } else {
      setCurtidas(prevState => prevState - 1);
    }
  }

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image
          style={styles.fotoPerfil}
          source={{ uri: feed.perfil }} />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>
      <Image
        resizeMode={"cover"}
        style={styles.fotoPublicacao} source={{ uri: feed.imagemPublicacao }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.likeButton} onPress={handleLikePressed}>
          <Image
            style={styles.likeImage}
            source={isLiked ? require("../../../assets/heart.png") : require("../../../assets/empty-heart.png")}
          />
        </TouchableOpacity>
        {curtidas === 0 ? <></> :
          <Text style={styles.curtidas}>{curtidas} {curtidas === 1 ? "curtida" : "curtidas"}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 20,
    textAlign: "left",
    color: "#000",
    marginLeft: 8,
  },
  fotoPerfil: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  viewPerfil: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
  },
  likeButton: {
    alignItems: "center",
  },
  likeImage: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  curtidas: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Lista;
