import { PureComponent } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { searchStyle } from './styles'
import RNPickerSelect from 'react-native-picker-select'
import searchFilters from '../../searchFilters.json'
import PropTypes from 'prop-types'

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
            value={this.state.query}
            onChangeText={(t) => this.setState({ query: t })}
          />
          <Button title="Procurar" onPress={search} />
        </View>
        <View style={searchStyle.filtersContainer}>
          <View style={searchStyle.filter}>
            <RNPickerSelect
              value={this.state.orderBy}
              Icon={() => <Ionicons name="reorder-three" size={24} color="black" />}
              onValueChange={(v) => this.setState({ orderBy: v })}
              items={searchFilters.orderBy}
            />
          </View>
          <Text>|</Text>
          <View style={searchStyle.filter}>
            <RNPickerSelect
              value={this.state.extension}
              Icon={() => <Ionicons name="document-outline" size={24} color="black" />}
              onValueChange={(v) => this.setState({ extension: v })}
              items={searchFilters.extension}
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
