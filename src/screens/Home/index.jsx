import axios from 'axios'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { FlatList, View } from 'react-native'

import BookResult from '../../components/BookResult'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import NoResult from '../../components/NoResult'
import { BasicSearch } from '../../components/Search'
import { API_URL } from '../../init'
import { axiosErrorHandler } from '../../utils'
import { styles } from './styles'

class HomeScreen extends PureComponent {
  state = { loading: true, recommendations: [], error: '' }

  componentDidMount = () => this.loadRecommendations()

  loadRecommendations () {
    const onResponse = (response) => this.setState({
      loading: false,
      recommendations: response.data
    })
    const onError = (error) => this.setState({
      loading: false,
      error: axiosErrorHandler(error)
    })

    this.setState({ loading: true, error: '' })
    axios.get(API_URL).then(onResponse).catch(onError)
  }

  renderBookItem = ({ item, index }) => (
    <BookResult
      key={index}
      data={item}
      navigation={this.props.navigation}
    />
  )

  renderRecommendations = () => (
    <FlatList
      data={this.state.recommendations}
      renderItem={this.renderBookItem} />
  )

  renderError = () => (
    <Error
      message={this.state.error}
      onRetryPress={() => this.loadRecommendations()} />
  )

  render () {
    const onSearch = (query) => this.props.navigation.navigate('Search', { query })
    return (
      <View style={styles.flex}>
        <BasicSearch onSearchRequest={onSearch} />
        <View style={styles.flex}>
          {this.state.loading
            ? <Loading message="Getting recommendations..." />
            : this.state.error
              ? this.renderError()
              : this.state.recommendations.length > 0
                ? this.renderRecommendations()
                : <NoResult message="No recommendations this time :)" />
          }
        </View>
      </View>
    )
  }
}
HomeScreen.propTypes = { navigation: PropTypes.object.isRequired }

export default HomeScreen
