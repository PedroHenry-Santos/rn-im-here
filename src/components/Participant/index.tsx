import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from '@/components/Participant/styles'

export type ParticipantProperties = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProperties) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
