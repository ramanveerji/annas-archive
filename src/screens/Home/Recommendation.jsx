import { memo } from 'react'
import { Pressable, View, Text, StyleSheet, Image } from 'react-native'
import { colors } from '../../init'
import PropTypes from 'prop-types'

const Recommendation = ({ data, navigation }) => (
  <Pressable
    style={styles.container}
    onPress={() => navigation.navigate('Search', { query: data.title })}
  >
    <View>
      {data.thumbnail_url
        ? <Image
          source={{ uri: data.thumbnail_url }}
          style={styles.image}
          resizeMode="contain"
        />
        : <Text>Nada aqui</Text>
      }
    </View>
    <View style={styles.information}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.authors}>{data.authors.join(', ')}</Text>
    </View>
  </Pressable>
)
Recommendation.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginVertical: 5,
    backgroundColor: colors.container,
    padding: 6,
    borderRadius: 12
  },
  image: {
    height: 175,
    width: 99,
    margin: 8,
    borderRadius: 6
  },
  information: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 8
  },
  authors: {
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
    color: colors.text
  }
})

export default memo(Recommendation)
