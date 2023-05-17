import { memo } from 'react'
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native'

const Loading = ({ message }) => (
  <View style={style.root}>
    <ActivityIndicator size={56} />
    <Text style={style.text}>{message}</Text>
  </View>
)

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center'
  }
})

export default memo(Loading)
