import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Lista from "./Lista";
import React from "react";

const Instagram = () => {
  const feed = [
    {
      id: 1,
      nome: "Jefferson",
      perfil: "https://i.pinimg.com/originals/75/82/09/7582098de480133df2fed86d2de7637b.jpg",
      imagemPublicacao: "https://embedsocial.com/wp-content/uploads/2018/04/embed-instagram-feed-widget-on-website.jpg",
      curtidas: 0,
    },
    {
      id: 2,
      nome: "Maria",
      perfil: "https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg",
      imagemPublicacao: "https://conteudo.imguol.com.br/c/noticias/a2/2020/07/23/imagem-ilustrativa---feed-do-instagram-no-celular-smartphone-1595525230297_v2_450x337.jpg.webp",
      curtidas: 1,
    },
    {
      id: 3,
      nome: "Mario",
      perfil: "https://static.tropafreefire.com.br/news/2022/07/25163732/imagem_2022-07-25_163731533.png",
      imagemPublicacao: "https://s2.glbimg.com/g3_Ag-nGUcHwbnz3BhUnqh5dcTc=/0x54:2224x1272/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/x/y/QAD354Qc2z5ciK5tboqQ/color-1.jpeg",
      curtidas: 234,
    },
    {
      id: 4,
      nome: "Samuel",
      perfil: "https://ef564920920608e03abb-7d34ef097b6ab6c586dfc84157128505.ssl.cf1.rackcdn.com/PostImagem/36734/foto-de-perfil-profissional_o1eh30s23km6j1lmm1k5r8cvinuj.JPG",
      imagemPublicacao: "https://www.agorapulse.com/pt/blog/wp-content/uploads/sites/8/2018/07/Instagram-feed-posts-to-dtories-image-from-Instagram-1.png",
      curtidas: 5346,
    },
    {
      id: 5,
      nome: "Valentina",
      perfil: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
      imagemPublicacao: "https://i2.wp.com/deliciadeblog.com/wp-content/uploads/Dias-instagram-feed-harmonia.png?fit=1915%2C1270&ssl=1",
      curtidas: 2363463,
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoNameButton}>
          <Image style={styles.logo} source={require("../../../assets/Instagram_Logo_2016.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messagesButton}>
          <Image style={[styles.messages]} source={require("../../../assets/chat.png")} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={feed}
        renderItem={({ item }) => <Lista data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    height: 50,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  logo: {
    width: 140,
    height: 40,
  },
  messages: {
    width: 25,
    height: 25,
  },
  logoNameButton: {
    justifyContent: "center",
  },
  messagesButton: {
    justifyContent: "center",
  },
});

export default Instagram;
