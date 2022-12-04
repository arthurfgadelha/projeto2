import React, { useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg'
import SingImput from '../components/SingImput'
import CustomButton from '../components/CustomButton';
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'


export default function SingIn() {

  const navigation = useNavigation();

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const goToRegistration = () => {
    navigation.reset({
      routes: [{name: 'SingUp'}]
    });
  }

  return (
      <View style = {styles.container}>
          <Logo width="100%" height = "180"/>
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
            textlabel={'LOGIN'}
          />
          <TouchableOpacity style = {styles.registration} onPress={goToRegistration}>
            <Text>Não Possui conta?</Text>
            <Text style = {{fontWeight: 'bold'}}>  Cadastre-se</Text>
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
