import { memo } from 'react'
import { colors } from '../init'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const NoResult = ({ message }) => (
  <View style={style.root}>
    <Ionicons size={128} name="md-book" color={colors.notification} />
    <Text style={style.text}>{message}</Text>
  </View>
)
NoResult.propTypes = { message: PropTypes.string.isRequired }

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    color: colors.text
  }
})

export default memo(NoResult)
