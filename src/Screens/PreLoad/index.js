import React, { useEffect } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../config/firebase';
import styles from './styles';
import Logo from '../../../assets/logo.svg'

export default function Preload() {
    const navigation = useNavigation();

    useEffect(()=>{
        const userState = auth.onAuthStateChanged( user => {
            if(user){
                navigation.replace('HomeScreen')
            } else {
                navigation.navigate('SingIn')
              }
        })
            return () => userState();
    }, []); 
  
    return (
        <View style = {styles.container}>
            <Logo width="100%" height = "300"/>
            <ActivityIndicator size = 'large' color="#FFF" style = {styles.loadingIcon}/>
        </View>
    );
}

