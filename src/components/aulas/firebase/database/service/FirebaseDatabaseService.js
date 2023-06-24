import {get, onValue, push, ref, remove, set} from 'firebase/database';
import {firebaseDB} from '../../../../../config/firebase.configs';

class FirebaseDatabaseService {
  _firebaseDB;

  constructor(firebaseDatabase) {
    this._firebaseDB = firebaseDatabase;
  }

  async pegarIdade(setIdade) {
    const idadeReference = ref(this._firebaseDB, 'idade');

    try {
      const snapshot = await get(idadeReference);
      if (snapshot.exists()) {
        setIdade(snapshot.val());
      }
    } catch (error) {
      console.error(error);
    }
  }

  nomeListener(setNome) {
    const nomeReference = ref(this._firebaseDB, 'usuarios/3/nome');

    // onValue cria um listener para ficar observando se o valor da referencia é modificado
    onValue(nomeReference, snapshot => {
      if (snapshot.exists()) {
        setNome(snapshot.val());
      }
    });
  }

  async pegarUsuarios() {
    const usersReference = ref(this._firebaseDB, 'usuarios');

    try {
      const snapshot = await get(usersReference);
      if (snapshot.exists()) {
        const users = Object.values(snapshot.val());
        console.log(`${users.length} usuarios no banco de dados`);
        return users;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async deletarUsuario(nome, idade) {
    const usuariosRef = ref(this._firebaseDB, 'usuarios');

    try {
      const querySnapshot = await get(usuariosRef);
      let usuarioKey = null;

      querySnapshot.forEach(snapshot => {
        const usuario = snapshot.val();
        if (usuario.nome === nome && usuario.idade === idade) {
          usuarioKey = snapshot.key;
        }
      });

      if (usuarioKey) {
        const usuarioRef = ref(this._firebaseDB, `usuarios/${usuarioKey}`);
        console.log(usuarioKey);
        await remove(usuarioRef);
        console.log('Nó deletado');
      } else {
        console.log(
          'Nenhum usuário encontrado com o nome e idade especificados.',
        );
      }
    } catch (error) {
      console.error('Erro ao deletar nó:', error);
    }
  }

  async criarUsuario(usuario) {
    const usuariosReference = ref(this._firebaseDB, 'usuarios');
    let snapshot = await get(usuariosReference);

    let isExists;
    if (snapshot.exists()) {
      const users = Object.values(snapshot.val());

      users.forEach(user => {
        if (user.nome === usuario.nome && user.idade === usuario.idade) {
          isExists = true;
        }
      });
    }

    if (!isExists) {
      console.log(`existe?: ${isExists}`);
      try {
        const novoNoReference = push(usuariosReference);
        const novoId = novoNoReference.key;

        await set(novoNoReference, usuario);
        console.log('Novo nó criado com sucesso!');
        console.log('Novo ID:', novoId);
      } catch (error) {
        console.error('Erro ao criar novo nó:', error);
      }
    }
  }
}

export default new FirebaseDatabaseService(firebaseDB);
