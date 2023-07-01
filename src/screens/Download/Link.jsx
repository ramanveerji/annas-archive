import PropTypes from 'prop-types'
import { memo } from 'react'
import { Linking, Text, ToastAndroid, TouchableOpacity } from 'react-native'

import styles from './styles'

const openLink = (url) => {
  Linking.openURL(url)
    .catch(() => ToastAndroid.show(
      'Unable to open URL!',
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
