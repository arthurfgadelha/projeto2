import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { register } from '../../services/requestsFirebase';
import Alert from '../../components/Alert'
import Logo from '../../../assets/logo.svg'
import PersonIcon from '../../../assets/person.svg'
import EmailIcon from '../../../assets/email.svg'
import LockIcon from '../../../assets/lock.svg'
import SingImput from '../../components/SingImput';
import CustomButton from '../../components/CustomButton'

export default function SingUp() {

  const navigation = useNavigation();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [statusError, setStatusError] = useState('')
  const [messageError, setMenssageError] = useState('')

  async function registerUser(){
    if(email == ''){
        setMenssageError('Informe seu Email')
        setStatusError(email)
    } else if(password == ''){
        setMenssageError('Digite sua senha')
        setStatusError(password)
    } else{
        const result = await register(name, email, password)
        setStatusError('firebase')
      if(result == 'sucesso'){
        setMenssageError('Usuario criado com sucesso')
        setEmail('')
        setPassword('')
      }else{
        setStatusError('firebase')
        setMenssageError(result)
      }
  }
  }
  const goToRegistration = () => {
    navigation.reset({
      routes: [{name: 'SingIn'}]
    });
  }

  return (
      <View style = {styles.container}>
          <Logo width="100%" height = "180"/>
          <SingImput
            IconSvg={PersonIcon}
            textplaceholder = 'Digite seu nome'
            value = {name}
            onChangeText = {setName}
          />
          <SingImput
            IconSvg={EmailIcon}
            textplaceholder = 'Digite seu e-mail'
            value = {email}
            onChangeText = {setEmail}
            error = {statusError == 'email'}
            messageError = {messageError == 'password'}
          />
          <SingImput
            IconSvg={LockIcon}
            textplaceholder = 'Digite sua senha'
            value = {password}
            onChangeText = {setPassword}
            password = {true}
          />
          <Alert 
            mensagem={messageError}
            error={statusError == 'firebase'}
            setError={setStatusError}
           />
          <CustomButton 
            textlabel={'CADASTRAR'}
            onPress={() => registerUser()}
          />
          <TouchableOpacity style = {styles.registration} onPress={goToRegistration}>
            <Text>Já possui conta?</Text>
            <Text style = {{fontWeight: 'bold'}}>  Faça Login</Text>
          </TouchableOpacity>
      </View>
  );
}


