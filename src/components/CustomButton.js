import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function CustomButton ({ textlabel }){
    return (
        <TouchableOpacity style = {styles.Button}>
            <Text style={styles.text}>{textlabel}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#5bb0bd',
        marginTop: 10,
        width: 300,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
        fontSize: 18,
    }
})