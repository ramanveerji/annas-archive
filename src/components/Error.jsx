import { memo } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { colors } from '../init'

const Error = ({ message, onRetryPress }) => (
  <View style={style.root}>
    <Ionicons name="md-warning" size={64} color={colors.notification} />
    <Text style={style.text}>{message}</Text>
    {onRetryPress
      ? (
      <Button
        title="Tentar novamente"
        onPress={onRetryPress}
        color={colors.buttons}
      />
        )
      : null}
  </View>
)
Error.propTypes = {
  message: PropTypes.string.isRequired,
  onRetryPress: PropTypes.func
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 16
  }
})

export default memo(Error)
