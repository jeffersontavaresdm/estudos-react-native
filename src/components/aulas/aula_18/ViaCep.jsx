import React, { useState, useRef } from "react";
import CEPService from "./service";
import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Card from "../../outros/card/Card";
import styles from "./via-cep.styles"

const ViaCep = () => {
  const [cep, setCep] = useState("");
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  async function buscar() {
    if (cep === "") {
      alert("Digite um CEP válido");
      setCep("");
      return;
    }

    try {
      const response = await CEPService.pegarCEP(cep);

      setCepUser(response);

      Keyboard.dismiss();
    } catch (error) {
      console.error("ERROR: " + error);
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={[styles.button, styles.searchButton]} onPress={buscar}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={limpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {cepUser && (
        <View style={styles.resultArea}>
          <Card>
            <Text style={styles.resultText}>CEP: {cepUser.cep}</Text>
            <Text style={styles.resultText}>Logradouro: {cepUser.logradouro}</Text>
            <Text style={styles.resultText}>Bairro: {cepUser.bairro}</Text>
            <Text style={styles.resultText}>Cidade: {cepUser.localidade}</Text>
            <Text style={styles.resultText}>Estado: {cepUser.uf}</Text>
          </Card>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ViaCep;
