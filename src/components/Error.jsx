import { memo } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Error = ({ message, onRetryPress }) => (
  <View style={style.root}>
    <Ionicons name="md-warning" size={64} />
    <Text style={style.text}>{message}</Text>
    {onRetryPress ? <Button title="Tentar novamente" onPress={onRetryPress} /> : null}
  </View>
)

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 16
  }
})

export default memo(Error)
