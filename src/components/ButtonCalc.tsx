import { View, Text, TouchableOpacity } from "react-native"
import styles from "../theme/AppTheme"

interface Props {
    texto: string,
    color?: string,
    ancho?: boolean,
    accion: ( numeroTexto: string ) => void,
}

export const ButtonCalc = ({ texto, color = '#2D2D2D', ancho= false, accion }: Props ) => {
    return (
        <TouchableOpacity 
            onPress={ () => accion( texto ) }
        >
            <View style={{ 
                ...styles.btn,
                backgroundColor: color,
                width: ( ancho ) ? 180 : 80,
            }}>
            <Text style={{
                ...styles.btnTexto,
                color: ( color === '#9b9b9b' ) ? 'black' : 'white'
                }}>{ texto }</Text>
            </View>
        </TouchableOpacity>
    )
}
