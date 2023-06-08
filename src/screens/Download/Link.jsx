import { memo } from 'react'
import { TouchableOpacity, Text, Linking, ToastAndroid } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const openLink = (url) => {
  Linking.openURL(url)
    .catch(() => ToastAndroid.show(
      'Não foi possível abrir o link!',
      ToastAndroid.SHORT
    ))
}

const Link = ({ title, url }) => (
  <TouchableOpacity style={styles.linkContainer} onPress={() => openLink(url)}>
    <Text style={styles.linkTitle}>{title}</Text>
  </TouchableOpacity>
)
Link.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default memo(Link)
