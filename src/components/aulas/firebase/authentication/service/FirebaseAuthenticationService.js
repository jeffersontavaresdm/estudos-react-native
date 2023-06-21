import { firebaseAuth } from "../../../../../config/firebase.configs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
}

export default new FirebaseAuthenticationService(firebaseAuth);
