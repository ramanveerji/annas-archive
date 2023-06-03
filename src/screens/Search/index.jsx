import { PureComponent } from 'react'
import { FlatList, View } from 'react-native'
import axios from 'axios'
import SearchComponent from './SearchBar'
import SearchResult from './Result'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { API_URL } from '../../init'
import PropTypes from 'prop-types'

class SearchScreen extends PureComponent {
  state = {
    loading: true,
    results: [],
    error: null
  }

  componentDidMount () {
    this.search(this.props.route.params.query, '', '')
  }

  search (query, orderBy, extension) {
    this.setState({ loading: true })
    axios.get(`${API_URL}/search`, { params: { q: query, sort: orderBy, ext: extension } })
      .then(response => this.setState({ results: response.data, loading: false }))
      .catch(e => this.setState({ error: 'Deu erro nessa bagaça!\n' + JSON.stringify(e.response), loading: false }))
  }

  render () {
    const renderResult = ({ item, index }) => (<SearchResult item={item} key={index} />)
    return (
      <View style={{ flex: 1 }}>
        <SearchComponent
          initialQuery={this.props.route.params.query}
          onSearchPress={(...args) => this.search(...args)}
        />
        {this.state.loading
          ? <Loading message="Procurando..." />
          : (this.state.error
              ? <Error message={this.state.error} />
              : <FlatList
                data={this.state.results}
                renderItem={renderResult} />
            )
        }
      </View>
    )
  }
}
SearchScreen.propTypes = { route: PropTypes.object.isRequired }

export default SearchScreen
