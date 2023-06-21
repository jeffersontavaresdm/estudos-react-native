import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Movie({ filme }) {
  return (
    <View style={styles.card}>
      <View style={styles.card}>
        <Text key={filme.id} style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Filme:</Text> {filme.nome}{"\n"}
          <Text style={{ fontWeight: "bold" }}>Sinopse:</Text> {filme.sinopse}{"\n"}
        </Text>
        <Image
          source={{ uri: filme.foto }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
});
