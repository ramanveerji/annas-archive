import { Ionicons } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { Pressable, Share, ToastAndroid } from 'react-native'

import { colors } from '../../init'

const ShareButton = ({ title, path }) => {
  const share = async () => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    try {
      await Share.share({
        message: `Download "${title}" from https://annas-archive.org/${cleanPath}`
      })
    } catch {
      ToastAndroid.show('Failed to share content!', ToastAndroid.SHORT)
    }
  }
  return (
    <Pressable onPress={share}>
      <Ionicons name='md-share-social-sharp' size={24} color={colors.button} />
    </Pressable>
  )
}
ShareButton.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default memo(ShareButton)
