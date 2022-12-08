import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

export default function logoutButton ({ logout }){
    return(
        <TouchableOpacity onPress={logout}>
            <Icon name={'log-out'} size={24} color="#000"/>
        </TouchableOpacity>
    )
}