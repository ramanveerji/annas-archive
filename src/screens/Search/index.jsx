import axios from 'axios'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { FlatList, ToastAndroid, View } from 'react-native'

import BookResult from '../../components/BookResult'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import NoResult from '../../components/NoResult'
import { AdvancedSearch } from '../../components/Search'
import { API_URL } from '../../init'
import { axiosErrorHandler } from '../../utils'

class SearchScreen extends PureComponent {
  state = {
    loading: false,
    results: [],
    lastSearchParameters: [],
    error: null
  }

  componentDidMount = () => this.search(this.props.route.params.query, '', '')

  search = async (query, orderBy, extension) => {
    if (this.state.loading) return
    if (!query.trim()) {
      return ToastAndroid.show(
        'Are you kidding with me?',
        ToastAndroid.SHORT
      )
    }
    this.setState({
      lastSearchParameters: [query, orderBy, extension],
      loading: true,
      error: null
    })
    let response

    try {
      response = await axios.get(
        `${API_URL}/search`,
        { params: { q: query, sort: orderBy, ext: extension } }
      )
    } catch (error) {
      return this.setState({
        error: axiosErrorHandler(error),
        loading: false
      })
    }
    this.setState({ results: response.data, loading: false })
  }

  renderBookResult = ({ item, index }) => (
    <BookResult
      key={index}
      data={item}
      navigation={this.props.navigation}
    />
  )

  render = () => (
    <View style={{ flex: 1 }}>
      <AdvancedSearch
        initialQuery={this.props.route.params.query}
        onSearchPress={this.search}
      />
      {this.state.loading
        ? <Loading message="Searching..." />
        : this.state.error
          ? <Error
              message={this.state.error}
              onRetryPress={() => this.search(...this.state.lastSearchParameters)} />
          : this.state.results.length > 0
            ? <FlatList
                data={this.state.results}
                renderItem={this.renderBookResult} />
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
