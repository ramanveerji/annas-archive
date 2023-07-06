import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../init'
import Button from './Button'

const Error = ({ message, onRetryPress }) => (
  <View style={style.root}>
    <Ionicons name="md-warning" size={128} color={colors.notification} />
    <Text style={style.text}>{message}</Text>
    {onRetryPress && (
      <Button
        onPress={onRetryPress}
        style={style.button}
        title="Try again"
      />
    )}
  </View>
)
Error.propTypes = {
  message: PropTypes.string.isRequired,
  onRetryPress: PropTypes.func
}

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    fontSize: 16
  }
})

export default memo(Error)
