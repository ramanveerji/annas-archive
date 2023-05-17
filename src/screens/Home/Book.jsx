import { memo } from 'react'
import { Pressable, View, Text, StyleSheet, Image } from 'react-native'

const Book = ({ data }) => (
  <Pressable style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginVertical: 5,
    backgroundColor: '#DDD',
    padding: 6,
    borderRadius: 6
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
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 8
  },
  authors: {
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center'
  }
})

export default memo(Book)
