import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "Increment" : {
      return { ...state, count: state.count + 1 };
    }
    case "Increment++" : {
      if (state.count >= 1) {
        return { ...state, count: state.count * 2 };
      } else {
        return { ...state, count: state.count + 1 };
      }
    }
    case "showText" : {
      return { ...state, showText: !state.showText };
    }
    default :
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => reducer(state, action),
    {
      count: 0,
      showText: true,
    },
    (initialState) => {
      return {
        ...initialState,
        count: initialState.count + 10,
        showText: !initialState.showText,
      };
    },
  );

  function handleClick() {
    dispatch({ type: "Increment" });
    dispatch({ type: "showText" });
  }

  function handleClickPlus() {
    dispatch({ type: "Increment++" });
  }

  return (
    <View style={styles.view1}>
      <Text style={styles.h1}>Testando React Hooks</Text>
      <Text style={styles.text}>{state.count}</Text>
      <View style={{ margin: 24 }}>
        <Button title={"Increment"} onPress={handleClick} />
      </View>
      <View style={{ margin: 24 }}>
        <Button title={"Increment++"} onPress={handleClickPlus} />
      </View>
      {state.showText && <Text style={styles.h1}>Testando useReducer</Text>}
      <Text style={styles.text}>{state.showText ? "Ativo" : "Inativo"}</Text>
    </View>
  );
};

export default UseReducer;

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  view1: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    backgroundColor: "#DDD",
    borderTopWidth: 2,
  },
  botao: {
    backgroundColor: "lightblue",
    width: 150,
    borderRadius: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.5,
    backgroundColor: "#FFF",
    margin: 16,
    padding: 8,
    elevation: 10,
    borderRadius: 4,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
