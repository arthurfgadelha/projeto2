import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0ff',
    },
    userEmail: {
        height: 'auto',
        flexDirection: 'row',
    },
    imgPerfil: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    textBox: {
        flex: 1,
        padding: 5,
    },
    nome: {
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        fontWeight: 'bold',
    },
    resumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    favorito: {
        color: 'yellow',
    },
    Nofavorito: {
        color: 'gray',
    },
})