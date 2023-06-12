import { memo, useState } from 'react'
import { advancedStyles } from './styles'
import { colors } from '../../init'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import filters from './filters.json'
import PropTypes from 'prop-types'
import BasicSearch from './Basic'

const SearchBar = ({ initialQuery, onSearchPress }) => {
  const [order, setOrder] = useState('hello')
  const [extension, setExtension] = useState('')

  const search = (query) => onSearchPress(query, order, extension)

  return (
    <View style={advancedStyles.container}>
      <BasicSearch onSearchRequest={(t) => search(t)} initialQuery={initialQuery} />
      <View style={advancedStyles.filtersContainer}>
        <View style={advancedStyles.filter}>
          <Ionicons name="reorder-three" size={24} color={colors.loadingAnimation} />
          <Picker
            selectedValue={order}
            onValueChange={(v) => setOrder(v)}
            style={{ flex: 1 }}
          >
            {filters.orderBy.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
        <Text style={{ color: colors.text }}>|</Text>
        <View style={advancedStyles.filter}>
          <Ionicons name="document-outline" size={24} color={colors.loadingAnimation} />
          <Picker
            selectedValue={extension}
            onValueChange={(v) => setExtension(v)}
            style={{ flex: 1 }}
          >
            {filters.extension.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  )
}
SearchBar.propTypes = {
  initialQuery: PropTypes.string.isRequired,
  onSearchPress: PropTypes.func.isRequired
}

export default memo(SearchBar)
