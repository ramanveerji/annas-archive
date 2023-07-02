import PropTypes from 'prop-types'
import { memo } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors } from '../init'

const Result = ({ data, navigation }) => {
  const onItemPress = () => {
    if (data.path) {
      navigation.navigate('Download', { title: data.title, path: data.path })
    } else {
      navigation.navigate('Search', { query: data.title })
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Image
        source={{ uri: data.thumbnail }}
        style={styles.thumbnail}
        resizeMode="contain"
      />
      <View style={styles.informationArea}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.authors}>{data.authors}</Text>
        {data.file_info && (
          <Text style={styles.fileInfo}>
            {Object.values(data.file_info).join(', ')}
          </Text>
        )}
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
    backgroundColor: colors.thumbnail,
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
