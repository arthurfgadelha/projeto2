import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./styles";

export default function EmailScreen ({ route }){
    const {id} = route.params;

    const [mensagem, setMensagem] = useState ([]);

    useEffect (() => {
        async function getData () {
            const response = await fetch ('https://mobile.ect.ufrn.br:3002/emails/' + id)
            const mensagem = await response.json();
            setMensagem([mensagem]);
        }
        getData();
    }, []);


    function renderItem ({item}) {
        return (
            <View style={styles.userEmail}>
                <View style={styles.container1}>
                    <Text style={styles.tituloEmail}>{item.tittle}</Text> 
                </View>
                <View style={styles.container2}>
                    <Image style={styles.imgPerfil} source={{uri: item.picture}}/>
                    <View style={styles.container5}>
                        <Text style={styles.tituloEmail}>{item.to}</Text>
                        <Text>Para {item.from}</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text>{item.time}</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text>{item.body}</Text>
                </View>
        </View>
        )
    }


    return (
     <View style={styles.container}>
        <StatusBar style="auto"/>
            <FlatList
                data={mensagem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
