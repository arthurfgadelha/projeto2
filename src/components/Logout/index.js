import { View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import styles from './styles'

export default function logoutButton ({ logout }){
    return(
        <TouchableOpacity onPress={logout}>
            <Icon name={'log-out'} size={24} color="#FFF"/>
        </TouchableOpacity>
    )
}