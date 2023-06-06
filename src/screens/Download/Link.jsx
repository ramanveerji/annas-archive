import { memo } from 'react'
import { Pressable, Text, StyleSheet, Linking } from 'react-native'

const openLink = (url) => {
  Linking.openURL(url)
}

const Link = ({ title, url }) => (
  <Pressable onPress={() => openLink(url)}>
    <Text>{title}</Text>
  </Pressable>
)

export default memo(Link)
