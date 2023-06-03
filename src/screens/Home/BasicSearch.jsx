import { memo, useState } from 'react'
import { TextInput, View, ToastAndroid } from 'react-native'
import { searchStyle } from './styles'
import { colors } from '../../init'
import Button from '../../components/Button'
import PropTypes from 'prop-types'

const BasicSearch = ({ navigation }) => {
  const [input, setInput] = useState('')
  const search = () => {
    if (input.trim() === '') {
      return ToastAndroid.show(
        'Não é possível procurar por algo que não foi dito!',
        ToastAndroid.SHORT
      )
    }
    navigation.navigate('Search', { query: input.trim() })
  }
  return (
    <View style={searchStyle.container}>
      <TextInput
        value={input}
        onChangeText={(t) => setInput(t)}
        style={searchStyle.searchInput}
        placeholder="O que você deseja?"
        placeholderTextColor={colors.placeholder}
      />
      <Button title="Procurar" onPress={search} color={colors.buttons} />
    </View>
  )
}
BasicSearch.propTypes = { navigation: PropTypes.object.isRequired }

export default memo(BasicSearch)
