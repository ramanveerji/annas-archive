import { memo, useState } from 'react'
import { searchStyle } from './styles'
import { colors } from '../../init'
import { Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import filters from './filters.json'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import RNPickerSelect from 'react-native-picker-select'

const SearchBar = ({ initialQuery, onSearchPress }) => {
  const [query, setQuery] = useState(initialQuery || '')
  const [order, setOrder] = useState('')
  const [extension, setExtension] = useState('')

  const search = () => onSearchPress(query, order, extension)

  return (
    <View style={searchStyle.container}>
      <View style={searchStyle.inputContainer}>
        <TextInput
          style={searchStyle.searchInput}
          placeholder="O que você deseja?"
          placeholderTextColor={colors.placeholder}
          onSubmitEditing={search}
          enterKeyHint="search"
          value={query}
          onChangeText={(t) => setQuery(t)}
        />
        <Button title="Procurar" onPress={search} />
      </View>
      <View style={searchStyle.filtersContainer}>
        <View style={searchStyle.filter}>
          <Ionicons name="reorder-three" size={24} color={colors.loadingAnimation} />
          <RNPickerSelect
            value={order}
            onValueChange={(v) => setOrder(v)}
            items={filters.orderBy}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
          />
        </View>
        <Text style={{ color: colors.text }}>|</Text>
        <View style={searchStyle.filter}>
          <Ionicons name="document-outline" size={24} color={colors.loadingAnimation} />
          <RNPickerSelect
            value={extension}
            onValueChange={(v) => setExtension(v)}
            items={filters.extension}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
    </View>
  )
}
SearchBar.propTypes = {
  initialQuery: PropTypes.string.isRequired,
  onSearchPress: PropTypes.func.isRequired
}

const pickerStyle = {
  inputAndroid: {
    color: colors.text
  }
}

export default memo(SearchBar)
