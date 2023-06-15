import { memo } from 'react'
import { colors } from '../init'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

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
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9,
    borderRadius: 4
  }
})

export default memo(Button)
