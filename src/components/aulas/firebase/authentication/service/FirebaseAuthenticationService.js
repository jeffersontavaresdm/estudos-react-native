import {firebaseAuth, firebaseDB} from '../../../../../config/firebase.configs';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {child, get, ref, set} from 'firebase/database';

class FirebaseAuthenticationService {
  _firebaseAuth;

  constructor(firebaseAuth) {
    this._firebaseAuth = firebaseAuth;
  }

  listarUsuarios() {
    const userReferences = ref(firebaseDB, 'usuarios');

    return get(userReferences)
      .then(snapshot => {
        if (snapshot.exists()) {
          const users = [];

          snapshot.forEach(childSnapshot => {
            const user = childSnapshot.val();
            users.push(user);
          });

          return users;
        } else {
          return [];
        }
      })
      .catch(error => error);
  }

  cadastrarComEmailSenha(email, password, name) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async userCredentials => {
        let userReferences = ref(firebaseDB, 'usuarios');
        let userReference = child(userReferences, userCredentials.user.uid);
        await set(userReference, {nome: name});
        return userCredentials.user;
      })
      .catch(error => error);
  }

  deletarContaComEmailSenha(email, senha) {
    return signInWithEmailAndPassword(this._firebaseAuth, email, senha)
      .then(userCredentials => {
        let userUID = userCredentials.user.uid;
        return userCredentials.user
          .delete()
          .then(async () => {
            let userReferences = ref(firebaseDB, 'usuarios');
            let userReference = child(userReferences, userUID);
            await set(userReference, null);
            return true;
          })
          .catch(() => false);
      })
      .catch(error => console.error(error));
  }

  conectarComEmailSenha(email, senha) {
    return signInWithEmailAndPassword(this._firebaseAuth, email, senha)
      .then(userCredential => userCredential.user)
      .catch(error => error);
  }

  desconectarComEmailSenha(email, senha) {
    let isOk = false;
    try {
      signInWithEmailAndPassword(this._firebaseAuth, email, senha).then(
        async () => {
          await signOut(this._firebaseAuth);
          isOk = true;
        },
      );
    } catch (error) {
      console.log(`Erro ao desconectar. Error:\n${error}`);
    }

    return isOk;
  }
}

export default new FirebaseAuthenticationService(firebaseAuth);
