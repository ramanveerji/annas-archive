import { PureComponent } from 'react'
import { API_URL } from '../../init'
import { styles } from './styles'
import { View, FlatList } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import { BasicSearch } from '../../components/Search'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import BookResult from '../../components/BookResult'

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
      error: 'Error!\n' + toString(error)
    })

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
      message="Unable to get recommendations!"
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
            : (this.state.error ? this.renderError() : this.renderRecommendations())}
        </View>
      </View>
    )
  }
}
HomeScreen.propTypes = { navigation: PropTypes.object.isRequired }

export default HomeScreen
