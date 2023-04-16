import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalculadoraScreens } from './src/screens/CalculadoraScreens';
import styles from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculadoraScreens />
    </SafeAreaView>
  )
}

export default App;
