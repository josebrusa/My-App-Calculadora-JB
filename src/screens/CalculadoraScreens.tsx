import { View, Text } from 'react-native'
import styles from '../theme/AppTheme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculadora } from '../hooks/useCalculadora'


export const CalculadoraScreens = () => {

    const {
        numero,
        numeroAnterior,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        btnDelete,
        limpiar,
        positivoNegativo,
        armarNumero
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>

            {
                ( numeroAnterior !== '0' && 
                    <Text style={styles.resultadoPequenio}>{ numeroAnterior }</Text>
                )
            }
            <Text
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{numero}</Text>



            <View style={styles.fila}>
                {/* boton  */}
                <ButtonCalc texto='C' color='#9b9b9b' accion={ limpiar }/>
                <ButtonCalc texto='+/-' color='#9b9b9b' accion={ positivoNegativo }/>
                <ButtonCalc texto='del' color='#9b9b9b' accion={ btnDelete }/>
                <ButtonCalc texto='/' color='#FF9427' accion={ btnDividir }/>
            </View>
            <View style={styles.fila}>
                {/* boton  */}
                <ButtonCalc texto='7' accion={ armarNumero }/>
                <ButtonCalc texto='8' accion={ armarNumero }/>
                <ButtonCalc texto='9' accion={ armarNumero }/>
                <ButtonCalc texto='X' color='#FF9427'accion={ btnMultiplicar } />
            </View>
            <View style={styles.fila}>
                {/* boton  */}
                <ButtonCalc texto='4' accion={ armarNumero }/>
                <ButtonCalc texto='5' accion={ armarNumero }/>
                <ButtonCalc texto='6' accion={ armarNumero }/>
                <ButtonCalc texto='-' color='#FF9427' accion={ btnRestar }/>
            </View>
            <View style={styles.fila}>
                {/* boton  */}
                <ButtonCalc texto='1' accion={ armarNumero }/>
                <ButtonCalc texto='2' accion={ armarNumero }/>
                <ButtonCalc texto='3' accion={ armarNumero }/>
                <ButtonCalc texto='+' color='#FF9427' accion={ btnSumar }/>
            </View>
            <View style={styles.fila}>
                {/* boton  */}
                <ButtonCalc texto='0' ancho accion={ armarNumero }/>
                <ButtonCalc texto='.' accion={ armarNumero }/>
                <ButtonCalc texto='=' color='#FF9427' accion={ calcular }/>
            </View>
        </View>
    )
}
