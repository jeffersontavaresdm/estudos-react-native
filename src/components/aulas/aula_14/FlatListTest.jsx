import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import filmesService from "./service";
import Movie from "./Movie";

const FlatListTest = () => {
  const [filmes, setFilmes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const result = await filmesService.pegarFilmes();
        setFilmes(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.card}>
      {
        isLoading
          ? <ActivityIndicator size="large" color="#0000ff" />
          : <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={filmes}
            renderItem={({ item: filme }) => <Movie filme={filme} />}
          />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
  },
});

export default FlatListTest;
