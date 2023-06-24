import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import firebaseDB from "../service/FirebaseDatabaseService";
import ListaUsuarios from "./ListaUsuarios";
import styles from "../styles/firebaseTest.styles";
import CriarUsuario from "./CriarUsuario";
import DeletarUsuario from "./DeletarUsuario";

const FirebaseDatabase = () => {
  const [usuarios, setUsuarios] = React.useState([]);
  const [listarUsuariosModal, setListarUsuariosModal] = React.useState(false);
  const [criarUsuariosModal, setCriarUsuarioModal] = React.useState(false);
  const [DeletarUsuariosModal, setDeletarUsuarioModal] = React.useState(false);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const gettedUsers = await firebaseDB.pegarUsuarios();
      setUsuarios(gettedUsers);
    };

    let intervalID;
    (async () => {
      await fetchUsers();
      intervalID = setInterval(fetchUsers, 60_000);
    })();

    return () => clearInterval(intervalID);
  }, []);

  function verUsuarios() {
    setListarUsuariosModal(!listarUsuariosModal);
  }

  async function criarUsuario() {
    setCriarUsuarioModal(true);
  }

  async function deletarUsuario() {
    setDeletarUsuarioModal(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={verUsuarios} style={styles.button}>
        <Text style={styles.text}>Listar usuários</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={criarUsuario} style={styles.button}>
        <Text style={styles.text}>Criar usuário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deletarUsuario} style={styles.button}>
        <Text style={styles.text}>Deletar usuário</Text>
      </TouchableOpacity>
      <ListaUsuarios modalVisible={listarUsuariosModal} setModalVisible={setListarUsuariosModal} usuarios={usuarios} />
      <CriarUsuario modalVisible={criarUsuariosModal} setModalVisible={setCriarUsuarioModal} setUsuarios={setUsuarios} />
      <DeletarUsuario modalVisible={DeletarUsuariosModal} setModalVisible={setDeletarUsuarioModal} usuario={usuarios} setUsuarios={setUsuarios} />
    </SafeAreaView>
  );
};

export default FirebaseDatabase;
