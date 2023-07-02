import axios from 'axios'
import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { FlatList, ToastAndroid, View } from 'react-native'

import BookResult from '../../components/BookResult'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import NoResult from '../../components/NoResult'
import { BasicSearch } from '../../components/Search'
import { API_URL } from '../../init'
import { axiosErrorHandler } from '../../utils'
import { styles } from './styles'

class HomeScreen extends PureComponent {
  state = { loading: true, recommendations: [], error: null }

  componentDidMount = () => this.loadRecommendations()

  loadRecommendations = async () => {
    this.setState({ loading: true, error: null })
    let response
    try {
      response = await axios.get(API_URL)
    } catch (error) {
      return this.setState({ error: axiosErrorHandler(error), loading: false })
    }
    this.setState({ recommendations: response.data, loading: false })
  }

  renderBookItem = ({ item, index }) => (
    <BookResult
      key={index}
      data={item}
      navigation={this.props.navigation}
    />
  )

  onSearch = (query) => {
    if (!query.trim()) {
      return ToastAndroid.show(
        "Can't search for an empty query :)",
        ToastAndroid.SHORT
      )
    }
    this.props.navigation.navigate('Search', { query })
  }

  render = () => (
    <View style={styles.flex}>
      <BasicSearch onSearchRequest={this.onSearch} />
      <View style={styles.flex}>
        {this.state.loading
          ? <Loading message="Getting recommendations..." />
          : this.state.error
            ? <Error
                message={this.state.error}
                onRetryPress={this.loadRecommendations} />
            : this.state.recommendations.length > 0
              ? <FlatList
                  data={this.state.recommendations}
                  renderItem={this.renderBookItem} />
              : <NoResult message="No recommendations this time :)" />
        }
      </View>
    </View>
  )
}
HomeScreen.propTypes = { navigation: PropTypes.object.isRequired }

export default HomeScreen
