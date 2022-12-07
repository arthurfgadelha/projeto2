import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth/react-native";

function errosFirebase(error){
  let mensagem = '';
  switch(error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      mensagem = "Esse email já está em uso";
      break;
    case AuthErrorCodes.INVALID_EMAIL:
      mensagem = "Email inválido";
      break;
    case AuthErrorCodes.WEAK_PASSWORD:
      mensagem = "A senha precisa de no minimo 6 caracteres";
      break;
    default:
      mensagem="Erro desconhecido";
  }
  return mensagem;
}

export async function register(login, password) {
  const resultado = await createUserWithEmailAndPassword(auth, login, password)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario)
  })
  .catch((error) => {
    console.log(error);
    return errosFirebase(error)
  });

  return resultado
}