import { PureComponent } from 'react'
import { searchStyle } from './styles'
import { colors } from '../../init'
import { Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import searchFilters from '../../searchFilters.json'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import RNPickerSelect from 'react-native-picker-select'

class SearchBar extends PureComponent {
  defaultState = {
    orderBy: '',
    extension: ''
  }

  constructor (props) {
    super(props)
    this.state = { ...this.defaultState, query: this.props.initialQuery }
  }

  render () {
    const search = () => this.props.onSearchPress(
      this.state.query,
      this.state.orderBy,
      this.state.extension
    )
    return (
      <View style={searchStyle.container}>
        <View style={searchStyle.inputContainer}>
          <TextInput
            style={searchStyle.searchInput}
            placeholder="O que você deseja?"
            placeholderTextColor={colors.placeholder}
            onSubmitEditing={search}
            enterKeyHint="search"
            value={this.state.query}
            onChangeText={(t) => this.setState({ query: t })}
          />
          <Button title="Procurar" onPress={search} />
        </View>
        <View style={searchStyle.filtersContainer}>
          <View style={searchStyle.filter}>
          <Ionicons name="reorder-three" size={24} color={colors.loadingAnimation} />
            <RNPickerSelect
              value={this.state.orderBy}
              onValueChange={(v) => this.setState({ orderBy: v })}
              items={searchFilters.orderBy}
              style={{
                inputAndroid: {
                  color: colors.text
                }
              }}
              useNativeAndroidPickerStyle={false}
            />
          </View>
          <Text style={{ color: colors.text }}>|</Text>
          <View style={searchStyle.filter}>
          <Ionicons name="document-outline" size={24} color={colors.loadingAnimation} />
            <RNPickerSelect
              value={this.state.extension}
              onValueChange={(v) => this.setState({ extension: v })}
              items={searchFilters.extension}
              style={{
                inputAndroid: {
                  color: colors.text
                }
              }}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>
      </View>
    )
  }
}
SearchBar.propTypes = {
  initialQuery: PropTypes.string.isRequired,
  onSearchPress: PropTypes.func.isRequired
}

export default SearchBar
