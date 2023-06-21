import { Button, Switch, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import contaBancariaStyles from "./contaBancaria.styles";
import React from "react";

const BankAccount = () => {
  const [inputNome, setInputNome] = React.useState("");
  const [inputIdade, setInputIdade] = React.useState("");
  const [sexoEscolhido, setSexoEscolhido] = React.useState(5);
  const [limite, setLimite] = React.useState(0);
  const [estudante, setEstudante] = React.useState(false);
  const sexos = [
    { id: 1, descricao: "Masculino" },
    { id: 2, descricao: "Feminino" },
    { id: 3, descricao: "Não binário" },
    { id: 4, descricao: "Agênero" },
    { id: 5, descricao: "Prefiro não dizer" },
  ];

  function handleAbrirConta() {
    const dados = {
      nome: inputNome,
      idade: inputIdade,
      sexo: sexos.find((s) => s.id === sexoEscolhido)?.descricao || "Gênero não selecionado",
      limite: limite,
      estudante: estudante ? "Sim" : "Não",
    };

    const mensagem = `Nome: ${dados.nome}\nIdade: ${dados.idade}\nSexo: ${dados.sexo}\nLimite: R$ ${dados.limite.toFixed(2)}\nEstudante: ${dados.estudante}`;

    alert(mensagem);
  }

  const handleInputChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setInputIdade(numericValue);
  };

  return (
    <View style={contaBancariaStyles.card}>
      <Text style={contaBancariaStyles.title}>Abertura de Conta</Text>
      <View style={contaBancariaStyles.form}>
        <TextInput
          style={contaBancariaStyles.input}
          placeholder="Nome"
          onChangeText={(name) => setInputNome(name)}
          returnKeyType="next"
        />
        <TextInput
          style={contaBancariaStyles.input}
          placeholder="Idade"
          onChangeText={handleInputChange}
          keyboardType="numeric"
          value={inputIdade}
          returnKeyType="next"
        />
        <View style={contaBancariaStyles.pickerContainer}>
          <Text style={contaBancariaStyles.label}>Gênero</Text>
          <Picker
            style={contaBancariaStyles.picker}
            selectedValue={sexoEscolhido}
            onValueChange={(valor) => setSexoEscolhido(valor)}
            prompt="Selecione o gênero"
          >
            {sexos.map((sexo) => (
              <Picker.Item key={sexo.id} value={sexo.id} label={sexo.descricao} />
            ))}
          </Picker>
        </View>
        <Text style={[contaBancariaStyles.label, { marginBottom: 10 }]}>
          Limite: R$ {limite.toFixed(2)}
        </Text>
        <Slider
          style={contaBancariaStyles.slider}
          value={limite}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(value) => setLimite(value)}
        />
        <View style={contaBancariaStyles.switchContainer}>
          <Text style={contaBancariaStyles.switchLabel}>Estudante:</Text>
          <Switch
            value={estudante}
            onValueChange={(value) => setEstudante(value)}
          />
        </View>
      </View>
      <Button title="Abrir Conta!" onPress={handleAbrirConta} />
    </View>
  );
};

export default BankAccount;
