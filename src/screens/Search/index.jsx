import axios from 'axios'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { FlatList, View } from 'react-native'

import BookResult from '../../components/BookResult'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import NoResult from '../../components/NoResult'
import { AdvancedSearch } from '../../components/Search'
import { API_URL } from '../../init'
import { axiosErrorHandler } from '../../utils'

class SearchScreen extends PureComponent {
  state = { loading: true, results: [], error: null }

  componentDidMount = () => this.search(this.props.route.params.query, '', '')

  search (query, orderBy, extension) {
    const onResponse = (response) => this.setState({
      results: response.data,
      loading: false
    })
    const onError = (error) => this.setState({
      error: axiosErrorHandler(error),
      loading: false
    })

    this.setState({ loading: true, error: '' })
    const params = { q: query, sort: orderBy, ext: extension }
    axios.get(`${API_URL}/search`, { params }).then(onResponse).catch(onError)
  }

  renderBookResult = ({ item, index }) => (
    <BookResult
      key={index}
      data={item}
      navigation={this.props.navigation}
    />
  )

  renderResults = () => (
    <FlatList
      data={this.state.results}
      renderItem={this.renderBookResult} />
  )

  renderError = () => <Error message={this.state.error} />

  render = () => (
    <View style={{ flex: 1 }}>
      <AdvancedSearch
        initialQuery={this.props.route.params.query}
        onSearchPress={(...args) => this.search(...args)}
      />
      {this.state.loading
        ? <Loading message="Searching..." />
        : this.state.error
          ? this.renderError()
          : this.state.results.length > 0
            ? this.renderResults()
            : <NoResult message='No results found!' />
      }
    </View>
  )
}
SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired
}

export default SearchScreen
