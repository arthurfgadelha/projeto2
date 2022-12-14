import { auth } from "../../config/firebase"
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  AuthErrorCodes } from "firebase/auth/react-native";

function errosFirebase(error){
  let mensagem = '';
  switch(error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      mensagem = "Email já existe";
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

export async function register(name, login, password) {
  const resultado = await createUserWithEmailAndPassword(auth, login, password, name)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error);
    return errosFirebase(error)
  });
  return resultado
}

export async function loginto(login, password) {
  const resultado = await signInWithEmailAndPassword(auth, login, password)
  .then((dadosDoUsuario) => {
    console.log(dadosDoUsuario)
    return "sucesso"
  })
  .catch((error) => {
    console.log(error);
    //return errosFirebase(error)
    return "erro"
  });
  return resultado
}