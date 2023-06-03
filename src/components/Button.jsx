import { memo } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../init'
import PropTypes from 'prop-types'

const Button = ({ title, onPress, color = colors.buttons, style = { color: colors.buttonText } }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, { backgroundColor: color }]}
  >
    <Text style={style}>{title}</Text>
  </TouchableOpacity>
)
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    borderRadius: 4
  }
})

export default memo(Button)
