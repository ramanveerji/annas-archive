import { memo } from 'react'
import { colors } from '../init'
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Result = ({ data, navigation }) => {
  let fileInfo = null
  if (data.file_info) {
    const { language, extension, size } = data.file_info
    fileInfo = [language, extension, size].filter(i => i !== null)
  }
  const onItemPress = () => {
    if (data.url.startsWith('/search')) {
      navigation.navigate('Search', { query: data.title })
    } else {
      navigation.navigate('Download', { path: data.url })
    }
  }
  return (
    <Pressable style={styles.container} onPress={onItemPress}>
      <Image
        source={{ uri: data.thumbnail_url }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.informationArea}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.authors}>{data.authors.join(', ')}</Text>
        {fileInfo
          ? <Text style={styles.fileInfo}>
              {Object.values(fileInfo).join(', ')}
            </Text>
          : null
        }
      </View>
    </Pressable>
  )
}
Result.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 12,
    backgroundColor: colors.container,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    height: 175,
    width: 99,
    backgroundColor: colors.thumbnailBackground,
    borderRadius: 6,
    marginRight: 12
  },
  informationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 18,
    textAlign: 'center'
  },
  authors: {
    marginVertical: 5,
    textAlign: 'center',
    color: colors.text,
    fontStyle: 'italic'
  },
  fileInfo: {
    color: colors.text,
    textAlign: 'center'
  }
})

export default memo(Result)
