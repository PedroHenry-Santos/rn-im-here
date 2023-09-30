import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '@/components/Participant'
import { styles } from '@/screens/home/styles'

function handleParticipantAdd() {
  // eslint-disable-next-line no-console
  console.warn('Você clicou no botão de Adicionar!')
}

function handleParticipantRemove(id: number) {
  Alert.alert('Remover participante', `Deseja remover o participante ${id}?`, [
    {
      text: 'Não',
      style: 'cancel',
    },
    {
      text: 'Sim',
      onPress: () => {
        // eslint-disable-next-line no-console
        console.warn(`Você clicou no botão de Remover o participante ${id}!`)
      },
    },
  ])
}

export function Home() {
  const participants = [
    { id: 1, name: 'Pedro Santos' },
    { id: 2, name: 'Arthur Lopes' },
    { id: 3, name: 'Vitor Shimohira' },
    { id: 4, name: 'Paulo Shimohira' },
    { id: 5, name: 'Gabriel Ferreira' },
    { id: 6, name: 'Marcos Silva' },
    { id: 7, name: 'Wallace Bertulluci' },
    { id: 8, name: 'Lucas Jose' },
    { id: 9, name: 'Mario Frias' },
    { id: 10, name: 'Maria Viana' },
    { id: 11, name: 'Caio Gomes' },
    { id: 12, name: 'Luiza Silva' },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 1 de Outubro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Node do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adicionado
          </Text>
        )}
      />
    </View>
  )
}
