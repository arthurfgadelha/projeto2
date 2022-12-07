import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

export default function HomeScreen ({navigation}){
    const [listEmail, setListEmail] = useState([]);
    
    useEffect(() => {
        async function getData () {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const listEmail = await response.json();
            setListEmail(listEmail);
        }
        getData();
    }, []);


    function renderItem({item}){
        return <TouchableOpacity style={styles.userEmail} onPress={() => navigation.navigate('EmailScreen', {id: item.id})}  >
            <Image style={styles.imgPerfil} source={{uri: item.picture}}/>
                <View style={styles.textBox} >
                    <View style={styles.nome}>
                        <Text>De {item.to} Para {item.from}</Text>
                        <Text>{item.time}</Text>
                    </View>
                        <Text style={styles.titulo}>{item.tittle}</Text>
                   <View style={styles.resumo}>
                        <Text>{item.summary}</Text>
                        <FontAwesome name="star" size={24} style={item.star ? styles.favorito : styles.Nofavorito}/>
                   </View>
                </View>
             </TouchableOpacity> ;
    }

    return (
        <View style={styles.container}>
             <StatusBar style="auto"/>
             <FlatList
                data={listEmail}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
             />
        </View>
    )
}
