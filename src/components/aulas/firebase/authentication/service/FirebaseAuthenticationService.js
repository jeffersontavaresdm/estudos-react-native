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

  async cadastrarComEmailSenha(email, password, name) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async userCredentials => {
        let user = userCredentials.user;
        let data = {id: user.uid, name: name, email: user.email};
        let userReferences = ref(firebaseDB, 'usuarios');
        let userReference = child(userReferences, user.uid);
        await set(userReference, data);
        return user;
      })
      .catch(error => error);
  }

  deletarContaComEmailSenha(email, senha) {
    return signInWithEmailAndPassword(this._firebaseAuth, email, senha)
      .then(userCredentials => {
        let user = userCredentials.user;
        return user
          .delete()
          .then(async () => {
            let userReferences = ref(firebaseDB, 'usuarios');
            let userReference = child(userReferences, user.uid);
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
      console.error(`Erro ao desconectar. Error:\n${error}`);
    }

    return isOk;
  }
}

export default new FirebaseAuthenticationService(firebaseAuth);
