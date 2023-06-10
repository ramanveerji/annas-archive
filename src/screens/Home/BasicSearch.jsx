import { memo, useState } from 'react'
import { colors } from '../../init'
import { searchStyle } from './styles'
import { TextInput, View, ToastAndroid } from 'react-native'
import PropTypes from 'prop-types'
import Button from '../../components/Button'

const BasicSearch = ({ navigation }) => {
  const [query, setQuery] = useState('')
  const search = () => {
    if (query.trim() === '') {
      return ToastAndroid.show(
        'Não é possível procurar por algo que não foi dito!',
        ToastAndroid.SHORT
      )
    }
    navigation.navigate('Search', { query: query.trim() })
  }
  return (
    <View style={searchStyle.container}>
      <TextInput
        value={query}
        onChangeText={(t) => setQuery(t)}
        style={searchStyle.searchInput}
        placeholder="O que você deseja?"
        placeholderTextColor={colors.placeholder}
        onSubmitEditing={search}
        enterKeyHint="search"
      />
      <Button title="Procurar" onPress={search} />
    </View>
  )
}
BasicSearch.propTypes = { navigation: PropTypes.object.isRequired }

export default memo(BasicSearch)
