import { useState } from 'react'
import { Alert } from 'react-native'

export type Participant = {
  id: number
  name: string
}

export function useParticipant() {
  const [participants, setParticipants] = useState<Participant[]>([])

  function handleParticipantAdd(name: string) {
    if (!name.trim()) {
      Alert.alert('Nome inválido', 'Informe um nome para o participante')
      return
    }

    setParticipants((oldParticipants) => [
      ...oldParticipants,
      { id: (oldParticipants.at(-1)?.id ?? 0) + 1, name: name.trim() },
    ])
  }

  function handleParticipantRemove(id: number, name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            setParticipants((oldParticipants) =>
              oldParticipants.filter((participant) => participant.id !== id),
            )
          },
        },
      ],
    )
  }

  return {
    participants,
    handleParticipantAdd,
    handleParticipantRemove,
  }
}
