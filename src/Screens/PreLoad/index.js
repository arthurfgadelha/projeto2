import React, { useEffect } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

import Logo from '../../../assets/logo.svg'

export default function Preload() {
    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                //validar token
            } else {
              navigation.navigate('SingIn')
            }
        }
        checkToken()
    }, []); 
  
    return (
        <View style = {styles.container}>
            <Logo width="100%" height = "300"/>
            <ActivityIndicator size = 'large' color="#FFF" style = {styles.loadingIcon}/>
        </View>
    );
}

