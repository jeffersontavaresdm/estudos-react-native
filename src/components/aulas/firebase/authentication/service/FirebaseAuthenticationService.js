import { firebaseAuth } from "../../../../../config/firebase.configs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

class FirebaseAuthenticationService {
  _firebaseAuth;

  constructor(firebaseAuth) {
    this._firebaseAuth = firebaseAuth;
  }

  cadastrarComEmailSenha(email, senha) {
    createUserWithEmailAndPassword(firebaseAuth, email, senha)
      .then(() => console.log("Usuário cadastrado com sucesso!"))
      .catch(error => console.error(error));
  };

  deletarContaComEmailSenha(email, senha) {
    signInWithEmailAndPassword(this._firebaseAuth, email, senha)
      .then((userCredential) => {
        userCredential.user
          .delete()
          .then(() => console.log("Conta deletada com sucesso!"))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }

  conectarComEmailSenha(email, senha) {
    return signInWithEmailAndPassword(this._firebaseAuth, email, senha)
      .then((userCredential) => userCredential.user)
      .catch(error => console.error(error));
  }

  async desconectarComEmailSenha(email, senha) {
    try {
      await signInWithEmailAndPassword(this._firebaseAuth, email, senha);
      await signOut(this._firebaseAuth);
      console.log("Usuário desconectado com sucesso!");
    } catch (error) {
      console.error("Erro ao desconectar usuário:", error.message);
    }
  }
}

export default new FirebaseAuthenticationService(firebaseAuth);
