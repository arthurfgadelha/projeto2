import React from 'react';
import { TextInput, StyleSheet, View} from 'react-native';


export default function SingImput({IconSvg, textplaceholder, value, onChangeText, password}) {
    return(
        <View style = {styles.ImputArea}>
            <IconSvg width="24" height="24" />
            <TextInput
                style = {styles.textImput}
                placeholder= {textplaceholder}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {password}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImputArea:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 60,
        borderRadius: 30,
        marginTop: 10,
        padding: 10,
        paddingLeft: 20,
    },
    textImput: {
        marginLeft: 15,
      },
})