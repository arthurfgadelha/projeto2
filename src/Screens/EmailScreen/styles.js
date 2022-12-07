import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    }, 
    userEmail: {
        height: 'auto',
    },
    tituloEmail: {
      justifyContent:'center',
      fontWeight: 'bold',
    },
    infoRemetente: {
        height: 60,
        backgroundColor: 'green',
        justifyContent: 'space-between',
    },
    assunto: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    imgPerfil: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    container1: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
       
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        padding: 10,
    },
    container5: {
        padding: 5,
    }
})