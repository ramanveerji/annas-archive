import { memo, useState } from 'react'
import { advancedStyles } from './styles'
import { colors } from '../../init'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import filters from './filters.json'
import PropTypes from 'prop-types'
import BasicSearch from './Basic'
import RNPickerSelect from 'react-native-picker-select'

const SearchBar = ({ initialQuery, onSearchPress }) => {
  const [order, setOrder] = useState('')
  const [extension, setExtension] = useState('')

  const search = (query) => onSearchPress(query, order, extension)

  return (
    <View style={advancedStyles.container}>
      <BasicSearch onSearchRequest={(t) => search(t)} initialQuery={initialQuery} />
      <View style={advancedStyles.filtersContainer}>
        <View style={advancedStyles.filter}>
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
        <View style={advancedStyles.filter}>
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
