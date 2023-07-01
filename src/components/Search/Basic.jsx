import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { TextInput, View } from 'react-native'

import { colors } from '../../init'
import Button from '../Button'
import { basicStyles } from './styles'

const BasicSearch = ({ onSearchRequest, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery)
  const search = () => onSearchRequest(query)
  return (
    <View style={basicStyles.container}>
      <TextInput
        value={query}
        onChangeText={(t) => setQuery(t)}
        style={basicStyles.searchInput}
        placeholder="What you need?"
        placeholderTextColor={colors.placeholder}
        onSubmitEditing={search}
        enterKeyHint="search"
      />
      <Button title="Search" onPress={search} />
    </View>
  )
}
BasicSearch.propTypes = {
  onSearchRequest: PropTypes.func.isRequired,
  initialQuery: PropTypes.string
}

export default memo(BasicSearch)
