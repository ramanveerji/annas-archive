import { memo } from 'react'
import { recommendationStyle } from './styles'
import { Pressable, View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

const Recommendation = ({ data, navigation }) => (
  <Pressable
    style={recommendationStyle.container}
    onPress={() => navigation.navigate('Search', { query: data.title })}
  >
    <View>
      {data.thumbnail_url
        ? <Image
          source={{ uri: data.thumbnail_url }}
          style={recommendationStyle.image}
          resizeMode="contain"
        />
        : <Text>Nada aqui</Text>
      }
    </View>
    <View style={recommendationStyle.information}>
      <Text style={recommendationStyle.title}>{data.title}</Text>
      <Text style={recommendationStyle.authors}>{data.authors.join(', ')}</Text>
    </View>
  </Pressable>
)
Recommendation.propTypes = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
}

export default memo(Recommendation)
