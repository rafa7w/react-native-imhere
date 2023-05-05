// Arquivos cuja extensão é .jsx significa que vamos utilizar a sintaxe JSX com TypeScript
import { Text, View } from 'react-native'
import { styles } from './styles'

export default function Home() {
  return (
    // Um componente não pode retornar mais de um elemento 
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  )
};