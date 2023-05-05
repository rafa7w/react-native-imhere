// Arquivos cuja extensão é .jsx significa que vamos utilizar a sintaxe JSX com TypeScript
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {

  const participants = ['Rafael', 'Gabriela', 'Marcos', 'Adriani']

  function handleParticipantAdd() {
    if (participants.includes('Rafael')) {
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome.')
    }
  }

  function handleParticipantRemove(name: string) {
    return Alert.alert('Remover', `Remover o participante ${name}?`, [{
      text: 'Sim',
      onPress: () => Alert.alert('Deletado!')
    }, {
      text: 'Não',
      style: 'cancel'
    }])
  }

  return (
    // Um componente não pode retornar mais de um elemento 
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
          <Participant name={item} onRemove={() => handleParticipantRemove(item)}/>
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