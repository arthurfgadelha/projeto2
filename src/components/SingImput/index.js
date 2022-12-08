import React, { useState } from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import styles from './styles';


export default function SingImput({IconSvg, textplaceholder, value, onChangeText, secureTextEntry, error, messageError}) {
    const [secureMode, setSecureMode] = useState(secureTextEntry);
    return(
        <>
            <TextInput
                style = {styles.input}
                placeholder= {textplaceholder}
                value = {value}
                onChangeText = {onChangeText}
                error = {error}
                secureTextEntry = {secureMode}
                mode="outlined"
                activeOutlineColor='#1E8187'
                right={
                    secureTextEntry ?
                    <TextInput.Icon
                      name={secureMode ? 'eye-off' : 'eye'}
                      onPress={() => setSecureMode(!secureMode)}
                    /> : null
                  }
                />
                {error && <HelperText type="error" visible={error}>
                  {messageError}
                </HelperText>}
        </>
    )
}
