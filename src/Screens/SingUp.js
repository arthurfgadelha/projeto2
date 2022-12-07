import React, { useEffect, useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

import Logo from '../../assets/logo.svg'
import SingImput from '../components/SingImput';
import CustomButton from '../components/CustomButton';
import PersonIcon from '../../assets/person.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'


export default function SingIn() {

  const navigation = useNavigation();

  const [name, setName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    createUserWithEmailAndPassword(auth, login, password)
  .then((userCredential) => {
    console.log(userCredential)
  })
  .catch((error) => {
    console.log(error)
  });
  }, [])

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
            textplaceholder = 'Digite seu ne'
            value = {name}
            onChangeText = {setName}
          />
          <SingImput
            IconSvg={EmailIcon}
            textplaceholder = 'Digite seu e-mail'
            value = {login}
            onChangeText = {setLogin}
          />
          <SingImput
            IconSvg={LockIcon}
            textplaceholder = 'Digite sua senha'
            value = {password}
            onChangeText = {setPassword}
            password = {true}
          />
          <CustomButton 
            textlabel={'CADASTRAR'}
          />
          <TouchableOpacity style = {styles.registration} onPress={goToRegistration}>
            <Text>Já possui conta?</Text>
            <Text style = {{fontWeight: 'bold'}}>  Faça Login</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#63c2d1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textImput: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 5,
    padding: 10,
  },
  registration: {
    flexDirection: 'row',
    marginTop: 35,
  }
});

