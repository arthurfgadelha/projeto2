import React, { useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Alert from '../../components/Alert'
import Logo from '../../../assets/logo.svg'
import SingImput from '../../components/SingImput';
import CustomButton from '../../components/CustomButton';
import { loginto } from '../../services/requestsFirebase';


export default function SingIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [statusError, setStatusError] = useState('')
  const [messageError, setMenssageError] = useState('')

  async function realizarLogin(){
    if(email == ''){
      setMenssageError('Email obrigatório!')
      setStatusError(email)
  } else if(password == ''){
      setMenssageError('Senha obrigatória!')
      setStatusError(password)
  } else{
      const result = await loginto(email, password)
      if( result == 'erro'){
        setStatusError('firebase')
        setMenssageError('Usuário ou senha inválidos')
      } else{
        navigation.navigate('HomeScreen')
        setEmail('')
        setPassword('')
      }
  }
  }

  const goToRegistration = () => {
    navigation.reset({
      routes: [{name: 'SingUp'}]
    });
  }

  return (
      <View style = {styles.container}>
          <Logo width="100%" height = "180"/>
          <SingImput
            textplaceholder = 'Digite seu e-mail'
            value = {email}
            onChangeText = {setEmail}
            error = {statusError == 'email'}
            messageError = {messageError}
          />
          <SingImput
            textplaceholder = 'Digite sua senha'
            value = {password}
            onChangeText = {setPassword}
            secureTextEntry
            error = {statusError == 'password'}
            messageError = {messageError}
          />
          <Alert 
            mensagem={messageError}
            error={statusError == 'firebase'}
            setError={setStatusError}
          />
          <CustomButton 
            textlabel={'LOGIN'}
            onPress = {() => realizarLogin()}
          />
          <TouchableOpacity style = {styles.registration} onPress={goToRegistration}>
            <Text>Não Possui conta?</Text>
            <Text style = {{fontWeight: 'bold'}}>  Cadastre-se</Text>
          </TouchableOpacity>
      </View>
  );
}
