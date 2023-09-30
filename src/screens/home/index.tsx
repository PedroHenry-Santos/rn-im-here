import { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '@/components/Participant'
import { useParticipant } from '@/screens/home/hooks/use-participant'
import { styles } from '@/screens/home/styles'

export function Home() {
  const [name, setName] = useState('')
  const { participants, handleParticipantAdd, handleParticipantRemove } =
    useParticipant()

  function handleSaveParticipant(name: string) {
    handleParticipantAdd(name)
    setName('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Domingo, 1 de Outubro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Node do participante"
          placeholderTextColor="#6B6B6B"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSaveParticipant(name)}
        >
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
            onRemove={() => handleParticipantRemove(item.id, item.name)}
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
