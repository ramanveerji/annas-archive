import PropTypes from 'prop-types'
import { memo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { colors } from '../init'

const defaultStyle = { color: colors.buttonText }

const Button = ({ title, onPress, color = colors.button, style = defaultStyle }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { backgroundColor: color }]}
  >
    <Text style={style}>{title}</Text>
  </TouchableOpacity>
)
Button.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
    padding: 9
  }
})

export default memo(Button)
