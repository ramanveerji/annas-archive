import { memo } from 'react'
import { Pressable, View, Text, Image, StyleSheet } from 'react-native'

const SearchResult = ({ item, navigation }) => {
  const { language, extension, size } = item.file_info
  const fileInfo = [language, extension, size].filter(i => i !== null)
  return (
    <Pressable style={styles.container}>
      <View>
        <Image source={{ uri: item.thumbnail_url }} style={styles.thumbnail} />
      </View>
      <View style={styles.informationArea}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.authors}>{item.authors.join(', ')}</Text>
        <Text style={styles.fileInfo}>
          {Object.values(fileInfo).join(', ')}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    height: 175,
    width: 99,
    backgroundColor: '#dfd',
    borderRadius: 6,
    marginRight: 12
  },
  informationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    textAlign: 'center'
  },
  authors: {
    marginVertical: 5,
    textAlign: 'center'
  },
  fileInfo: {
    color: '#636'
  }
})

export default memo(SearchResult)
