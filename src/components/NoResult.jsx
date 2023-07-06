import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors } from '../init'

const NoResult = ({ message }) => (
  <View style={style.root}>
    <Ionicons size={128} name="md-book" color={colors.notification} />
    <Text style={style.text}>{message}</Text>
  </View>
)
NoResult.propTypes = { message: PropTypes.string.isRequired }

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: colors.text,
    fontSize: 15
  }
})

export default memo(NoResult)
