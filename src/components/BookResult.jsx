import PropTypes from 'prop-types'
import { memo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../init'

const FileInfo = ({ data }) => {
  const info = Object.values(data).filter(i => i != null)
  return (
    <Text style={styles.fileInfo}>
      {info.join(', ')}
    </Text>
  )
}
FileInfo.propTypes = { data: PropTypes.object.isRequired }

const Result = ({ data, navigation }) => {
  const onItemPress = () => data.path
    ? navigation.navigate('Download', { title: data.title, path: data.path })
    : navigation.navigate('Search', { query: data.title })
  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Image
        resizeMode="contain"
        source={{ uri: data.thumbnail }}
        style={styles.thumbnail}
      />
      <View style={styles.informationArea}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.authors}>{data.authors}</Text>
        {data.file_info && <FileInfo data={data.file_info} />}
      </View>
    </TouchableOpacity>
  )
}
Result.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.container,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 8,
    padding: 12
  },
  thumbnail: {
    backgroundColor: colors.thumbnail,
    borderRadius: 6,
    height: 175,
    marginRight: 12,
    width: 99
  },
  informationArea: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 18,
    textAlign: 'center'
  },
  authors: {
    color: colors.text,
    fontStyle: 'italic',
    marginVertical: 5,
    textAlign: 'center'
  },
  fileInfo: {
    color: colors.text,
    textAlign: 'center'
  }
})

export default memo(Result)
