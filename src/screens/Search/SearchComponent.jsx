import { PureComponent } from 'react'
import { Button, Pressable, Text, TextInput, View } from 'react-native'
import { searchStyle } from '../Home/styles'
import searchFilters from '../../searchFilters.json'

class Search extends PureComponent {
  state = {
    query: '',
    orderBy: '',
    extension: ''
  }

  constructor (props) {
    super(props)
    this.state.query = this.props.initialQuery
  }

  render () {
    const search = () => this.props.onSearchPress(
      this.state.input,
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
            onChange={(t) => this.setState({ query: t })}
          />
          <Button title="Procurar" onPress={search} />
        </View>
        <View style={searchStyle.filtersContainer}>
          <Pressable style={searchStyle.filter}>
            <Text style={searchStyle.textCenter}>
              🔼 {searchFilters.orderBy[this.state.orderBy]}
            </Text>
          </Pressable>
          <Text>|</Text>
          <Pressable style={searchStyle.filter}>
            <Text style={searchStyle.textCenter}>
              📄 {searchFilters.extension[this.state.extension]}
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

export default Search
