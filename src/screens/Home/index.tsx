// Arquivos cuja extensão é .jsx significa que vamos utilizar a sintaxe JSX com TypeScript
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {

  const participants = ['Rafael', 'Gabriela', 'Marcos', 'Adriani']

  function handleParticipantAdd() {
    console.log('Adicionar')
  }

  function handleParticipantRemove() {
    console.log('Remover')
  }

  return (
    // Um componente não pode retornar mais de um elemento 
    // Se precisar passar parâmetro na função onRemove={() => func(params)}
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>


      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do paticipante'
          placeholderTextColor='#6B6B6B'
          // keyboardType
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant name={item} onRemove={handleParticipantRemove}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      
    </View>

  )
};