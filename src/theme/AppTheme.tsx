import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculadoraContainer: {
        flex:1,
        paddingHorizontal:7,
        justifyContent:'flex-end',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequenio:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection:'row',
        justifyContent: 'center',
        paddingHorizontal:7,
        marginBottom: 16
    },
    btn:{
        width: 80,
        height:80,
        backgroundColor:'#2d2d2d',
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal: 8
    },
    btnTexto:{
        textAlign:'center',
        color:'white',
        padding: 8,
        fontSize: 35,
        fontWeight:'300',

    }

})


export default styles;