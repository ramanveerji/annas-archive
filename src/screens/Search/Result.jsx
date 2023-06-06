import { memo } from 'react'
import { resultStyle } from './styles'
import { Pressable, View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

const Result = ({ item, navigation }) => {
  const { language, extension, size } = item.file_info
  const fileInfo = [language, extension, size].filter(i => i !== null)
  return (
    <Pressable
      style={resultStyle.container}
      onPress={() => navigation.navigate('Download', { path: item.url })}
    >
      <View>
        <Image
          source={{ uri: item.thumbnail_url }}
          style={resultStyle.thumbnail}
          resizeMode="contain"
        />
      </View>
      <View style={resultStyle.informationArea}>
        <Text style={resultStyle.title}>{item.title}</Text>
        <Text style={resultStyle.authors}>{item.authors.join(', ')}</Text>
        <Text style={resultStyle.fileInfo}>
          {Object.values(fileInfo).join(', ')}
        </Text>
      </View>
    </Pressable>
  )
}
Result.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default memo(Result)
