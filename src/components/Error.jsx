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
    {onRetryPress
      ? <Button
          title="Try again"
          onPress={onRetryPress}
          style={style.button}
        />
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
    fontSize: 16,
    marginBottom: 20
  },
  button: {
    fontSize: 16
  }
})

export default memo(Error)
