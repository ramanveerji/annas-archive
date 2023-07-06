import { Ionicons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'
import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import { Text, View } from 'react-native'

import { colors } from '../../init'
import BasicSearch from './Basic'
import filters from './filters.json'
import { advancedStyles } from './styles'

const pickerItem = (item, index) => (
  <Picker.Item
    label={item.label}
    value={item.value}
    key={index}
    style={advancedStyles.pickerItem} />
)

const SearchBar = ({ initialQuery, onSearchPress }) => {
  const [order, setOrder] = useState('')
  const [extension, setExtension] = useState('')

  const search = (query) => onSearchPress(query, order, extension)

  return (
    <View style={advancedStyles.container}>
      <BasicSearch onSearchRequest={search} initialQuery={initialQuery} />
      <View style={advancedStyles.filtersContainer}>
        <View style={advancedStyles.filter}>
          <Ionicons name="reorder-three" size={24} color={colors.loadingAnimation} />
          <Picker
            dropdownIconColor={colors.button}
            mode="dropdown"
            onValueChange={setOrder}
            selectedValue={order}
            style={advancedStyles.picker}
          >
            {filters.orderBy.map(pickerItem)}
          </Picker>
        </View>
        <Text style={{ color: colors.text }}>|</Text>
        <View style={advancedStyles.filter}>
          <Ionicons name="document-outline" size={24} color={colors.loadingAnimation} />
          <Picker
            dropdownIconColor={colors.button}
            mode="dropdown"
            onValueChange={setExtension}
            selectedValue={extension}
            style={advancedStyles.picker}
          >
            {filters.extension.map(pickerItem)}
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
